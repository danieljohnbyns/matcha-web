import { createFileRoute, redirect } from '@tanstack/react-router';

/**
 * Kept as a redirect, not deleted.
 *
 * This route used to be a second deletion page with its own copy, and the two
 * drifted: it promised "Your account will be deleted within 30 days" while
 * /data-deletion promised a verification step and a cancellation period, and
 * neither was true. One page can be kept honest; two cannot. The path stays
 * because it is linked from the site footer and may be linked from elsewhere,
 * and a 404 on a deletion URL reads as a removed deletion route.
 */
export const Route = createFileRoute('/delete-request')({
	beforeLoad: () => {
		throw redirect({ to: '/data-deletion', replace: true });
	}
});
