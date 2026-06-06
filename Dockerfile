# Stage 1: Build
FROM oven/bun:latest AS builder
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
# Build the application. Ensure no build-time environment variable files are created.
RUN bun run build

# Stage 2: Production
FROM node:22-slim AS runner
WORKDIR /app
# Copy the built artifacts
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json

ENV NODE_ENV=production
EXPOSE 3010

# Runtime environment variables should be injected by the deployment platform (Dokploy).
CMD ["node", "dist/server/server.js"]
