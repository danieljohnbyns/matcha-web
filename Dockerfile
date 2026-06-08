# syntax=docker/dockerfile:1

# =============================================
# Stage 1: Builder
# =============================================
FROM oven/bun:1-alpine AS builder
WORKDIR /app

# Install dependencies (cached layer)
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy the source code
COPY . .

# --- IMPORTANT ---
# Vite needs these variables AT BUILD TIME to replace import.meta.env values
# ARG VITE_API_URL
# ENV VITE_API_URL=${VITE_API_URL}

# Build the app
RUN bun run build


# =============================================
# Stage 2: Runner (Production)
# =============================================
FROM oven/bun:1-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Install curl for healthchecks
RUN apk add --no-cache curl

# Copy package files
COPY package.json bun.lock ./

# Install ONLY production deps
RUN bun install --production

# Copy the build artifacts from the Builder stage
COPY --from=builder --chown=bun:bun /app/dist ./dist
COPY --from=builder --chown=bun:bun /app/server.ts ./server.ts

USER bun

# The port is dynamic via Env Vars
ENV PORT=80
EXPOSE 80

# Start the Custom Bun Server
CMD ["bun", "server.ts"]
