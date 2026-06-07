# Use the official Bun image
FROM oven/bun:1.2-slim
WORKDIR /app

# Set production environment
ENV NODE_ENV=production
# Ensure the server listens on all interfaces inside the container
ENV HOST=0.0.0.0
ENV PORT=3000

# Copy configuration files first for better caching
COPY package.json bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy the rest of the source code
# This includes the 'public' folder which Vite needs during build
COPY . .

# Build the application
# This generates dist/client and dist/server
RUN bun run build

# Setup the entrypoint script
ARG START_COMMAND="bun run start"
RUN echo "#!/bin/sh\n${START_COMMAND}" > /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

# Expose the port
EXPOSE 3000

ENTRYPOINT ["sh", "-c", "/app/entrypoint.sh"]