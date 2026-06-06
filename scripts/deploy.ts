import { spawn } from 'bun';
import pm2 from 'pm2';

const LOG_FILE = 'deploy.log';

let logs = '';

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
				logs += text;
			};
		})();

		// Read from the stderr stream
		(async () => {
			for await (const chunk of proc.stderr) {
				const text = new TextDecoder().decode(chunk);
				process.stderr.write(text);
				logs += text;
			};
		})();

		proc.exited
			.then(() => {
				if (proc.exitCode === 0) resolve();
				else
					reject(
						new Error(`Process exited with code ${proc.exitCode}`)
					);
			})
			.catch((err) => {
				reject(err);
			});
	});
};

await exec(['git', 'reset', '--hard'], { cwd: process.cwd(), stdio: 'pipe' });
await exec(['git', 'pull', '--rebase'], { cwd: process.cwd(), stdio: 'pipe' });
await exec(['bun', 'ci'], { cwd: process.cwd(), stdio: 'pipe' });
await exec(['bun', 'run', 'build'], {
	cwd: process.cwd(),
	stdio: 'pipe'
});
pm2.restart('matcha-web', (err) => {
	if (err)
		pm2.start(
			{
				name: 'matcha-web',
				script: 'bun',
				args: 'run preview',
				cwd: process.cwd(),
				env: process.env as Record<string, string>
			},
			(startErr) => {
				if (startErr) {
					console.error('Failed to start matcha-web:', startErr);
					logs += `Failed to start matcha-web: ${startErr.message}\n`;
				} else {
					console.log('matcha-web started successfully');
					logs += 'matcha-web started successfully\n';
				};
			}
		);
	else {
		console.log('matcha-web restarted successfully');
		logs += 'matcha-web restarted successfully\n';
	};
});

Bun.write(LOG_FILE, logs);
