import { createFileRoute } from '@tanstack/react-router';
import { execSync } from 'node:child_process';

const DEPLOY_SECRET = process.env.DEPLOY_SECRET;

export const Route = createFileRoute('/api/deploy')({
	server: {
		handlers: {
			POST: async ({ request }) => {
				// Verify the deploy secret
				const authHeader = request.headers.get('authorization');
				if (!DEPLOY_SECRET || authHeader !== `Bearer ${DEPLOY_SECRET}`)
					return Response.json({ error: 'Unauthorized' }, { status: 401 });

				try {
					const rootDir = process.cwd();

					// git reset --hard
					execSync('git reset --hard', { cwd: rootDir, stdio: 'pipe' });

					// git pull
					execSync('git pull', { cwd: rootDir, stdio: 'pipe' });

					// bun ci (clean install)
					execSync('bun ci', { cwd: rootDir, stdio: 'pipe' });

					// build
					execSync('bun run build', { cwd: rootDir, stdio: 'pipe' });

					// Restart the production server via PM2
					execSync('bunx pm2 restart matcha-web', {
						cwd: rootDir,
						stdio: 'pipe'
					});

					return Response.json({
						success: true,
						message: 'Deployment successful'
					});
				} catch (error) {
					const message =
            error instanceof Error ? error.message : 'Unknown error';
					return Response.json(
						{ success: false, error: message },
						{ status: 500 }
					);
				};
			}
		}
	}
});
