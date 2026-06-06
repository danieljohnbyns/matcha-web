import React from 'react';
import { Button } from 'antd';
import { Link } from '@tanstack/react-router';

export const Hero = (): React.JSX.Element => {
	return (
		<section className='py-24 md:py-32 bg-warm-white'>
			<div className='max-w-1200px mx-auto px-6 text-center'>
				<h1 className='text-4xl md:text-6xl font-bold text-charcoal leading-tight'>
					Your Services.
					<br />
					Your Community.
				</h1>
				<p className='text-warm-gray text-lg md:text-xl mt-6 max-w-2xl mx-auto'>
					Matcha is the social platform built for service providers to
					showcase their work, connect with clients, and grow their
					business.
				</p>
				<div className='mt-10'>
					<Link to='/download'>
						<Button
							type='primary'
							size='large'
							className='h-auto px-8 py-3 text-base font-semibold'
						>
							Download the App
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
};
