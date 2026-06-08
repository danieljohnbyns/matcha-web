import { createFileRoute } from '@tanstack/react-router';
import { Container } from '#/components';

const Roles = () => {
	return (
		<section className='py-24 bg-warm-white min-h-[80vh] flex items-center'>
			<Container>
				<div className='text-center'>
					<h1 className='text-4xl md:text-5xl font-bold text-matcha-dark'>Roles</h1>
					<p className='text-warm-gray text-lg mt-4'>Explore roles and permissions on Matcha.</p>
				</div>
			</Container>
		</section>
	);
};

export const Route = createFileRoute('/roles')({ component: Roles });
