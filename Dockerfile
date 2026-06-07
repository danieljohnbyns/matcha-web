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

# Copy build output and ensure ownership by 'bun' user
COPY --from=builder --chown=bun:bun /app/dist ./dist
COPY --from=builder --chown=bun:bun /app/package.json ./

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Fix: EXPOSE should only contain the port number
EXPOSE 3000

# Use the non-root 'bun' user
USER bun

# Start the application
ARG START_COMMAND="bun run start"
ENV START_COMMAND=${START_COMMAND}

# Use exec to ensure signals (like SIGTERM) are handled correctly by the process
CMD ["sh", "-c", "exec ${START_COMMAND}"]