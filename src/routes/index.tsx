import React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '#/components/home/Hero';
import { Features } from '#/components/home/Features';
// import { HowItWorks } from '#/components/home/HowItWorks'; // TODO: Re-enable when ready
// import { Screenshots } from '#/components/home/Screenshots'; // TODO: Re-enable when ready
import { FAQ } from '#/components/home/FAQ';

const Home = (): React.JSX.Element => {
	return (
		<div>
			<Hero />
			<Features />
			{/* <HowItWorks />  TODO: Re-enable when ready */}
			{/* <Screenshots />  TODO: Re-enable when ready */}
			<FAQ />
		</div>
	);
};

export const Route = createFileRoute('/')({ component: Home });
