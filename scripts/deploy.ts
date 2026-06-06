import { spawn } from 'bun';

const LOG_FILE = 'deploy.log';
await Bun.write(
	LOG_FILE,
	`Deployment started at ${new Date().toISOString()}\n`
);

const exec = (command: string[], options: { cwd: string; stdio: 'pipe' }) => {
	const proc = spawn(command, {
		cwd: options.cwd,
		stdout: 'pipe',
		stderr: 'pipe'
	});

	return new Promise<void>((resolve, reject) => {
		const writer = Bun.file(LOG_FILE).writer();

		// Read from the stdout stream
		(async () => {
			for await (const chunk of proc.stdout) {
				const text = new TextDecoder().decode(chunk);
				process.stdout.write(text);
				writer.write(text);
			};
		})();

		// Read from the stderr stream
		(async () => {
			for await (const chunk of proc.stderr) {
				const text = new TextDecoder().decode(chunk);
				process.stderr.write(text);
				writer.write(text);
			};
		})();

		proc.exited
			.then(() => {
				writer.end();
				if (proc.exitCode === 0) resolve();
				else
					reject(
						new Error(`Process exited with code ${proc.exitCode}`)
					);
			})
			.catch((err) => {
				writer.end();
				reject(err);
			});
	});
};

// Sync with git, then deploy with docker compose
await exec(['git', 'fetch', 'origin'], { cwd: process.cwd(), stdio: 'pipe' });
await exec(['git', 'reset', '--hard', 'origin/production'], {
	cwd: process.cwd(),
	stdio: 'pipe'
});
await exec(['docker', 'compose', 'up', '-d', '--build'], {
	cwd: process.cwd(),
	stdio: 'pipe'
});
