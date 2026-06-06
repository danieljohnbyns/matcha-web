#!/bin/sh
# Start the webhook listener in the background
bun run scripts/webhook-listener.ts &

# Start the Vite preview server in the foreground
bun run vite preview --host 0.0.0.0 --port 8999
