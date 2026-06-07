# Use the official Bun image
FROM oven/bun:1.2-slim
WORKDIR /app

# Copy source code
COPY . .

# Install dependencies
ARG SETUP_COMMAND="bun ci"
RUN ${SETUP_COMMAND}

# Build command
ARG BUILD_COMMAND="bun run build"
RUN ${BUILD_COMMAND}

# Start the app
ARG START_COMMAND="bun run preview"
RUN echo "${START_COMMAND}" > /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

# Expose the default port for TanStack Start
EXPOSE 3000

ENTRYPOINT ["sh", "-c", "/app/entrypoint.sh"]