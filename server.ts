import path from 'node:path';
import server from './dist/server/server.js';

const PORT = Number(process.env.PORT ?? 3058);

Bun.serve({
	port: PORT,
	async fetch(request) {
		const url = new URL(request.url);
		const filepath = path.join('./dist/client', url.pathname);
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
