# syntax=docker/dockerfile:1

# =============================================
# Stage 1: Builder
# =============================================
FROM oven/bun:1-alpine AS builder
WORKDIR /app

# Install dependencies (cached layer)
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --no-cache

# Copy the source code
COPY . .

# Build the app
RUN bun run build


# =============================================
# Stage 2: Runner (Production)
# =============================================
FROM oven/bun:1-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy the build artifacts from the Builder stage
COPY --from=builder --chown=bun:bun /app/dist ./dist
COPY --from=builder --chown=bun:bun /app/server.ts ./server.ts

USER bun

ENV PORT=80
EXPOSE 80

CMD ["bun", "server.ts"]
