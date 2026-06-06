# Stage 1: Build
FROM oven/bun:latest AS builder
WORKDIR /app

# Stage 2: Dependencies
FROM base AS dependencies
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Stage 3: Build Application
FROM base AS build
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN bun run build

# Stage 4: Production Runner
FROM base AS runner
WORKDIR /app
COPY --from=build /app/.output ./.output

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["bun", "./.output/server/index.mjs"]
