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
						<Button type='primary' key='download' href='/download'>
							Get the App
						</Button>
					]}
				/>
			</Container>
		</section>
	);
};

export const Route = createFileRoute('/email-verified')({
	component: RouteComponent
});
