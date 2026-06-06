# Base image
FROM oven/bun:latest AS base
WORKDIR /app

# Install dependencies only when lockfile changes
FROM base AS deps
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Build the app
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

# Final image
FROM base AS runner
WORKDIR /app
# Only copy production dependencies and the build artifact
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

# Expose port
EXPOSE 4173

CMD ["bun", "run", "preview"]
