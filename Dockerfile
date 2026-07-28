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
COPY --from=build --chown=appuser:appuser /build/dist /app/dist
COPY --from=build --chown=appuser:appuser /build/node_modules /app/node_modules
COPY --from=build --chown=appuser:appuser /build/server.ts /app/server.ts

EXPOSE 80

# Execute using Bun runtime
CMD ["bun", "server.ts"]
