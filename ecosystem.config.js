const config = {
    apps: [
        {
            name: 'matcha-web',
            script: 'bun',
            args: 'run preview',
            cwd: '.',
            env: {
                NODE_ENV: 'production',
                PORT: '3000',
            },
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: '500M',
        },
    ],
}

module.exports = config
