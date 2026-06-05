import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '#/components/home/Hero';
import { Features } from '#/components/home/Features';
import { HowItWorks } from '#/components/home/HowItWorks';
import { Screenshots } from '#/components/home/Screenshots';
import { FAQ } from '#/components/home/FAQ';

export const Route = createFileRoute('/')({ component: Home });

const Home = () => {
	return (
		<div>
			<Hero />
			<Features />
			<HowItWorks />
			<Screenshots />
			<FAQ />
		</div>
	);
};
