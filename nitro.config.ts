import { defineConfig } from 'nitro/config';

export default defineConfig({
	// Vercel auto-detects preset via VERCEL env; fallback to 'bun' for Docker/Swiftwave
	// If you want Node instead of Bun for Docker, change to 'node-server'
	compatibilityDate: '2026-09-07',
	routeRules: {
		'/.well-known/apple-app-site-association': {
			headers: { 'content-type': 'application/json' }
		},
		'/.well-known/assetlinks.json': {
			headers: { 'content-type': 'application/json' }
		}
	}
});
