# Stage 1: Build
FROM oven/bun:latest AS builder
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

# Stage 2: Production
FROM node:22-slim AS runner
WORKDIR /app
# Only copy the built artifacts and production dependencies
# For a TanStack Start application, the server needs the bundled code.
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "dist/server/server.js"]
