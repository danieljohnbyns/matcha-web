import path from 'node:path';
import { existsSync } from 'node:fs';

// Support both Nitro (.output) and legacy TanStack (dist) outputs
// Nitro/Vercel builds use .output/public + .output/server/index.mjs
// Legacy Bun builds use dist/client + dist/server/server.js
const NITRO_PUBLIC = './.output/public';
const NITRO_SERVER = './.output/server/index.mjs';
const LEGACY_PUBLIC = './dist/client';
const LEGACY_SERVER = './dist/server/server.js';

const useNitro = existsSync(NITRO_PUBLIC) && existsSync(NITRO_SERVER);

if (useNitro) {
	console.log(
		`[bun-server] Detected Nitro build at ${NITRO_PUBLIC} — delegating to ${NITRO_SERVER}`
	);
	// Nitro's node-server/bun preset auto-starts via `serve()` on import.
	// It already handles static assets + routeRules (well-known JSON headers) + SSR.
	// Just import it and let it listen on process.env.PORT.
	await import(NITRO_SERVER);
} else {
	const PUBLIC_DIR = LEGACY_PUBLIC;
	const SERVER_ENTRY = LEGACY_SERVER;
	const serverModule = await import(SERVER_ENTRY);
	const server = serverModule.default ?? serverModule;

	const PORT = Number(process.env.PORT ?? 3058);

	console.log(
		`[bun-server] Using Legacy build: ${PUBLIC_DIR} + ${SERVER_ENTRY}`
	);

	Bun.serve({
		port: PORT,
		async fetch(request) {
			const url = new URL(request.url);
			const filepath = path.join(PUBLIC_DIR, url.pathname);
			const file = Bun.file(filepath);
			if (await file.exists()) {
				const headers = new Headers();
				// Universal Link / App Link association files must be served as
				// JSON for iOS/Android verification to succeed.
				if (url.pathname.endsWith('/apple-app-site-association'))
					headers.set('content-type', 'application/json');
				else if (url.pathname.endsWith('/assetlinks.json'))
					headers.set('content-type', 'application/json');
				return new Response(file, { headers });
			};
			return server.fetch(request);
		}
	});
};
