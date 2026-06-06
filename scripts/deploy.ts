import { spawn } from 'bun';

const LOG_FILE = 'deploy.log';

const exec = (command: string[], options: { cwd: string; stdio: 'pipe' }) => {
	const proc = spawn(command, {
		cwd: options.cwd,
		stdout: 'pipe',
		stderr: 'pipe'
	});

	return new Promise<void>((resolve, reject) => {
		// Read from the stdout stream
		(async () => {
			for await (const chunk of proc.stdout) {
				const text = new TextDecoder().decode(chunk);
				process.stdout.write(text);
				await Bun.write(LOG_FILE, text);
			}
		})();

		// Read from the stderr stream
		(async () => {
			for await (const chunk of proc.stderr) {
				const text = new TextDecoder().decode(chunk);
				process.stderr.write(text);
				await Bun.write(LOG_FILE, text);
			}
		})();

		proc.exited
			.then(() => {
				if (proc.exitCode === 0) resolve();
				else
					reject(
						new Error(`Process exited with code ${proc.exitCode}`)
					);
			})
			.catch(reject);
	});
};

await exec(['git', 'reset', '--hard'], { cwd: process.cwd(), stdio: 'pipe' });
await exec(['git', 'pull', '--rebase'], { cwd: process.cwd(), stdio: 'pipe' });
await exec(['bun', 'ci'], { cwd: process.cwd(), stdio: 'pipe' });
await exec(['bun', 'run', 'build'], {
	cwd: process.cwd(),
	stdio: 'pipe'
});
try {
	await exec(['bunx', 'pm2', 'restart', 'matcha-web'], {
		cwd: process.cwd(),
		stdio: 'pipe'
	});
} catch {
	// If restart fails, try starting the process
	// Split "bun run preview" into individual arguments for spawn/pm2
	await exec(
		['bunx', 'pm2', 'start', 'bun', '--name', 'matcha-web', '--', 'run', 'preview'],
		{
			cwd: process.cwd(),
			stdio: 'pipe'
		}
	);
};
