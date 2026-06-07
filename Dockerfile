# Use the official Bun image
FROM oven/bun:1.2-slim
WORKDIR /app

# Set production environment
ENV NODE_ENV=production

# Copy configuration files first for better caching
COPY package.json bun.lock ./

# Install dependencies
# Using --frozen-lockfile for deterministic builds
RUN bun install --frozen-lockfile

# Copy the rest of the source code
# (Excluding files matched in .dockerignore)
COPY . .

# Build the application
# This is required for TanStack Start to generate the 'dist' folder
RUN bun run build

# Setup the entrypoint script as requested
ARG START_COMMAND="bun run start"
RUN echo "${START_COMMAND}" > /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

# Expose the default port for TanStack Start
EXPOSE 3000

ENTRYPOINT ["sh", "-c", "/app/entrypoint.sh"]
