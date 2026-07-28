# --- Build Stage ---
FROM oven/bun:alpine AS build
WORKDIR /build

# Install dependencies
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

# Copy source and build Nitro production target
COPY . .
RUN bun run build

# --- Production Runner Stage ---
FROM oven/bun:alpine AS deploy
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=80

# Create security user
RUN adduser -D appuser
USER appuser

# Copy compiled Nitro server output
COPY --from=build --chown=appuser:appuser /build/.output /app/.output

EXPOSE 80

# Execute using Bun runtime
CMD ["bun", "/app/.output/server/index.mjs"]
