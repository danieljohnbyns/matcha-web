import React from 'react';
import { SectionHeading } from './SectionHeading';

const screens = [
	{ label: 'Profile', bg: 'bg-matcha-light' },
	{ label: 'Discover', bg: 'bg-matcha-light' },
	{ label: 'Messages', bg: 'bg-matcha-light' },
	{ label: 'Bookings', bg: 'bg-matcha-light' }
];

export const Screenshots = (): React.JSX.Element => {
	return (
		<section className='py-24 bg-white'>
			<div className='max-w-1200px mx-auto px-6'>
				<SectionHeading
					title='See Matcha in Action'
					subtitle='A glimpse at the experience waiting for you.'
				/>
				<div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
					{screens.map((screen) => (
						<div
							key={screen.label}
							className={`${screen.bg} rounded-2xl aspect-[9/16] flex items-center justify-center`}
						>
							<span className='text-warm-gray text-sm font-medium'>
								{screen.label}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
