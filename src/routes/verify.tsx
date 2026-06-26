import { createFileRoute } from '@tanstack/react-router';
import { Button, Result } from 'antd';
import { Container } from '#/components';

const RouteComponent = () => {
	return (
		<section className='py-24 bg-warm-white min-h-[80vh] flex items-center'>
			<Container>
				<Result
					status='success'
					title='Your email has been verified!'
					subTitle='Thank you for verifying your email address.'
					extra={[
						<Button
							type='primary'
							key='app'
							href='com.matchaservice.matcha://'
						>
							Open the App
						</Button>
					]}
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
					subTitle='The verification link is invalid or has expired.'
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
