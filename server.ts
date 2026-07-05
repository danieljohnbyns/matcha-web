import path from 'node:path';
import server from './dist/server/server.js';

const PORT = Number(process.env.PORT ?? 3058);

Bun.serve({
	port: PORT,
	async fetch(request) {
		const url = new URL(request.url);
		const filepath = path.join('./dist/client', url.pathname);
		const file = Bun.file(filepath);
		if (await file.exists()) return new Response(file);
		return server.fetch(request);
	}
});
