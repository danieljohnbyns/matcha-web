# Build stage
FROM oven/bun:latest AS build
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install
COPY . .
RUN bun run build

# Runtime stage
FROM oven/bun:latest
WORKDIR /app

# Install docker client to allow the webhook listener to interact with docker daemon
RUN apt-get update && apt-get install -y docker.io && rm -rf /var/lib/apt/lists/*

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/scripts ./scripts
COPY --from=build /app/src ./src
COPY --from=build /app/vite.config.ts ./vite.config.ts
COPY --from=build /app/tsconfig.json ./tsconfig.json
COPY entrypoint.sh .

EXPOSE 8999 9000
ENTRYPOINT ["/app/entrypoint.sh"]
