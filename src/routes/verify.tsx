import { createFileRoute } from '@tanstack/react-router';
import { Button, Result } from 'antd';
import { Container } from '#/components';

/**
 * The scheme declared at the app's `app.json:6`. Verification finishes in a
 * browser, so without a way back the user is stranded on a web page while the
 * app sits behind it waiting for exactly this status change -- and its
 * verify-email screen re-checks the moment it returns to the foreground.
 */
const APP_SCHEME = 'com.matchaservice.work://';

const ReturnToApp = () => (
	<Button type='primary' href={APP_SCHEME}>
		Return to the Matcha app
	</Button>
);

const RouteComponent = () => {
	return (
		<section className='py-24 bg-warm-white min-h-[80vh] flex items-center'>
			<Container>
				<Result
					status='success'
					title='Your email has been verified!'
					subTitle='Thank you for verifying your email address.'
					extra={[<ReturnToApp key='app' />]}
				/>
			</Container>
		</section>
	);
};

const ErrorComponent = () => {
	return (
		<section className='py-24 bg-warm-white min-h-[80vh] flex items-center'>
			<Container>
				<Result
					status='error'
					title='Verification Failed'
					subTitle='The verification link is invalid or has expired. You can send yourself a new one from the app.'
					extra={[<ReturnToApp key='app' />]}
				/>
			</Container>
		</section>
	);
};

export const Route = createFileRoute('/verify')({
	// get token from query params and verify it via https://api.matchaservice.com/emails/verify?token=TOKEN
	beforeLoad: async ({ search }) => {
		const token = (search as { token?: string }).token;
		if (!token) throw new Error('No token provided');
		// Call the API to verify the token
		const response = await fetch(
			`https://api.matchaservice.com/emails/verify?token=${token}`
		);
		if (!response.ok) throw new Error('Invalid token');
	},
	component: RouteComponent,
	errorComponent: ErrorComponent
});
