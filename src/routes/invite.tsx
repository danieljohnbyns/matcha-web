import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/invite')({
	loader: () => {
		throw redirect({ to: '/download' });
	}
});
