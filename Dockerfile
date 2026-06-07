# ---------- Build stage ----------
FROM oven/bun:latest AS builder
WORKDIR /app

COPY package.json bun.lock ./
ARG SETUP_COMMAND="bun install --frozen-lockfile"
RUN ${SETUP_COMMAND}

COPY . .
ARG BUILD_COMMAND="bun run build"
RUN ${BUILD_COMMAND}

# ---------- Runtime stage ----------
FROM oven/bun:latest
WORKDIR /app

COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./

ARG START_COMMAND="bun run start"
RUN echo "${START_COMMAND}" > /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

EXPOSE 3000:3000

ENTRYPOINT ["sh", "-c", "/app/entrypoint.sh"]