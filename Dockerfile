# ---- Base Stage: Common Setup ----
FROM oven/bun:1 AS base
WORKDIR /app

# ---- Dependencies Stage: Install and Cache Modules ----
FROM base AS deps
# Copy dependency manifests first for better layer caching
COPY package.json bun.lockb ./
# Install all dependencies (including dev) needed for the build step
RUN bun install --frozen-lockfile

# ---- Builder Stage: Build the Application ----
FROM base AS builder
# Copy installed modules and source code from the previous stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Build the TanStack Start application
RUN bun run build

# ---- Production Stage: Final Runtime Image ----
FROM base AS runner
WORKDIR /app

# Set the environment to production
ENV NODE_ENV=production

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 bunjs

# Copy necessary artifacts from the builder stage
COPY --from=builder --chown=bunjs:nodejs /app/dist ./dist
COPY --from=builder --chown=bunjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=bunjs:nodejs /app/server.ts ./server.ts

# Switch to the non-root user
USER bunjs

# Expose the port your app will listen on
EXPOSE 3000

# Run the custom Bun server script
CMD ["bun", "run", "server.ts"]