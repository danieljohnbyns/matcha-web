import { spawn } from 'bun';

// // eslint-disable-next-line no-async-promise-executor
// await new Promise(async (resolve) => {
// 	const proc = spawn(
// 		[
// 			'bunx',
// 			'eslint',
// 			'.',
// 			'--ext',
// 			'.ts,.tsx',
// 			'--fix',
// 			'--max-warnings',
// 			'0'
// 		],
// 		{
// 			env: { ...process.env, PGSSLMODE: 'disable' },
// 			cwd: process.cwd(),
// 			stdout: 'pipe'
// 		}
// 	);

// 	// Read from the stream
// 	for await (const chunk of proc.stdout) {
// 		const text = new TextDecoder().decode(chunk);
// 		process.stdout.write(text);
// 	};

// 	await proc.exited;
// 	if (proc.exitCode === 0) {
// 		console.log('ESLint completed successfully.');
// 		resolve(null);
// 	} else {
// 		console.error('ESLint found issues.');
// 		resolve(null);
// 		// reject(new Error(`Process exited with code ${proc.exitCode}`));
// 	};
// });

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
			};
		})();

		// Read from the stderr stream
		(async () => {
			for await (const chunk of proc.stderr) {
				const text = new TextDecoder().decode(chunk);
				process.stderr.write(text);
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
			.catch(reject);
	});
};

await exec(['git', 'reset', '--hard'], { cwd: process.cwd(), stdio: 'pipe' });
await exec(['git', 'pull'], { cwd: process.cwd(), stdio: 'pipe' });
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
	await exec(
		['bunx', 'pm2', 'start', 'bun run preview', '--name', 'matcha-web'],
		{
			cwd: process.cwd(),
			stdio: 'pipe'
		}
	);
};
