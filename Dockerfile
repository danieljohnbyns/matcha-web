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

# Copy package files and install ONLY production deps
COPY package.json bun.lock ./
RUN bun install --production

# Copy the entire build output (including the server and its assets)
COPY --from=builder --chown=bun:bun /app/dist ./dist

USER bun

# The port is dynamic via Env Vars
ENV PORT=80
EXPOSE 80

# Start the compiled server from its original location
CMD ["bun", "dist/server/server.js"]