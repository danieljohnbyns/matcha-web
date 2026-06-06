import { spawn } from 'bun';
import { createHmac, timingSafeEqual } from 'node:crypto';

const WEBHOOK_SECRET = process.env.GITHUB_WEBHOOK_SECRET;

if (!WEBHOOK_SECRET) {
	console.error('GITHUB_WEBHOOK_SECRET must be set');
	process.exit(1);
};

const verifySignature = (request: Request, body: string) => {
	const signature = request.headers.get('x-hub-signature-256');
	if (!signature) return false;

	const hmac = createHmac('sha256', WEBHOOK_SECRET!);
	hmac.update(body);
	const expectedSignature = `sha256=${hmac.digest('hex')}`;

	return timingSafeEqual(
		Buffer.from(signature),
		Buffer.from(expectedSignature)
	);
};

Bun.serve({
	port: 9000, // Use a different port to avoid conflicts
	async fetch(request) {
		if (request.method !== 'POST')
			return new Response('Method not allowed', { status: 405 });

		const body = await request.text();
		if (!verifySignature(request, body))
			return new Response('Invalid signature', { status: 401 });

		const payload = JSON.parse(body);

		// Only trigger deploy if it's a push to the production branch
		if (payload.ref === 'refs/heads/production') {
			// Trigger deploy asynchronously
			spawn(['bun', 'run', 'deploy'], {
				cwd: process.cwd()
			});
			return new Response('Deployment triggered', { status: 202 });
		}

		return new Response('Ignored event', { status: 200 });
	}
});
console.log('Webhook listener running on port 9000');
