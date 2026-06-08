import { createFileRoute } from '@tanstack/react-router';
import { Container } from '#/components';

const Feedback = () => {
	return (
		<section className='py-24 bg-warm-white min-h-[80vh] flex items-center'>
			<Container>
				<div className='text-center'>
					<h1 className='text-4xl md:text-5xl font-bold text-matcha-dark'>Feedback</h1>
					<p className='text-warm-gray text-lg mt-4'>Share your feedback with us.</p>
				</div>
			</Container>
		</section>
	);
};

export const Route = createFileRoute('/feedback')({ component: Feedback });
