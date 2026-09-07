# --- Build Stage ---
FROM oven/bun:alpine AS build
WORKDIR /build

# Install dependencies
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy source and build
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

# Copy compiled TanStack Start output and runtime dependencies
# Nitro outputs to .output (public + server), keep dist for fallback
COPY --from=build --chown=appuser:appuser /build/.output /app/.output
COPY --from=build --chown=appuser:appuser /build/dist /app/dist
COPY --from=build --chown=appuser:appuser /build/node_modules /app/node_modules
COPY --from=build --chown=appuser:appuser /build/bun-server.ts /app/bun-server.ts
COPY --from=build --chown=appuser:appuser /build/nitro.config.ts /app/nitro.config.ts
COPY --from=build --chown=appuser:appuser /build/public /app/public

EXPOSE 80

# Execute using Bun runtime
CMD ["bun", "bun-server.ts"]
