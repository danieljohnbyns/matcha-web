import React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Hero } from '#/components/home/Hero';
import { Features } from '#/components/home/Features';
import { HowItWorks } from '#/components/home/HowItWorks';
import { Screenshots } from '#/components/home/Screenshots';
import { FAQ } from '#/components/home/FAQ';

const Home = (): React.JSX.Element => {
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

export const Route = createFileRoute('/')({ component: Home });
