import { spawn } from 'bun';

// eslint-disable-next-line no-async-promise-executor
await new Promise(async (resolve) => {
	const proc = spawn(
		[
			'bunx',
			'eslint',
			'.',
			'--ext',
			'.ts,.tsx',
			'--fix',
			'--max-warnings',
			'0'
		],
		{
			env: { ...process.env, PGSSLMODE: 'disable' },
			cwd: process.cwd(),
			stdout: 'pipe'
		}
	);

	// Read from the stream
	for await (const chunk of proc.stdout) {
		const text = new TextDecoder().decode(chunk);
		process.stdout.write(text);
	};

	await proc.exited;
	if (proc.exitCode === 0) {
		console.log('ESLint completed successfully.');
		resolve(null);
	} else {
		console.error('ESLint found issues.');
		resolve(null);
		// reject(new Error(`Process exited with code ${proc.exitCode}`));
	};
});
