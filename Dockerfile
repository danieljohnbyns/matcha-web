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
FROM oven/bun:latest AS runner
WORKDIR /app

# Install git and docker cli for deployment scripts
RUN apt-get update && apt-get install -y git docker.io && rm -rf /var/lib/apt/lists/*

# Only copy production dependencies and the build artifact
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/scripts ./scripts

# Expose port
EXPOSE 4173

CMD ["bun", "run", "preview"]
