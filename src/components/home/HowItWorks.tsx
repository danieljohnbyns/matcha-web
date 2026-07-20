import React from 'react';
import { Share2, Lock, Repeat } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Container } from '#/components';

const steps = [
	{
		number: '01',
		icon: <Share2 className='w-6 h-6 text-matcha' />,
		title: 'Get Bookings',
		subtitle: 'Phase 1: Share Link',
		description:
			'Share your custom Matcha booking page anywhere your clients find you — Instagram, Messenger, text, or word-of-mouth.'
	},
	{
		number: '02',
		icon: <Lock className='w-6 h-6 text-matcha' />,
		title: 'Secure Bookings',
		subtitle: 'Phase 2: Verify Deposit',
		description:
			'Clients upload deposit proof. You verify and confirm the booking instantly — protecting your time and eliminating no-shows.'
	},
	{
		number: '03',
		icon: <Repeat className='w-6 h-6 text-matcha' />,
		title: 'Build Long-Term Retention',
		subtitle: 'Phase 3: Repeat Business',
		description:
			'After every completed appointment, Matcha automatically reminds clients when it is time to return and enables 1-tap rebooking.'
	}
];

export const HowItWorks = (): React.JSX.Element => {
	return (
		<section className='relative py-24 md:py-32 bg-warm-white overflow-hidden'>
			<Container>
				<SectionHeading
					title='The Matcha Journey'
					subtitle='Three seamless phases to earn trust, protect your schedule, and grow predictable repeat income.'
				/>

				<div className='relative mt-16 max-w-5xl mx-auto'>
					{/* Connected Step Line (Desktop) */}
					<div className='hidden md:block absolute top-12 left-[15%] right-[15%] h-1 bg-gradient-to-r from-matcha/20 via-matcha to-matcha/20 rounded-full -z-0' />

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10'>
						{steps.map((step) => (
							<div
								key={step.number}
								className='group glass-card p-8 rounded-3xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/80 relative flex flex-col items-center justify-between'
							>
								<div>
									{/* Circular Step Badge with Glow */}
									<div className='relative w-20 h-20 rounded-full bg-white border-2 border-matcha/30 shadow-md flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-matcha transition-all duration-300'>
										<div className='absolute -top-2 -right-2 w-7 h-7 rounded-full bg-matcha text-white font-bold text-xs flex items-center justify-center shadow-sm'>
											{step.number}
										</div>
										<div className='w-12 h-12 rounded-full bg-matcha-light flex items-center justify-center group-hover:bg-matcha group-hover:text-white transition-colors duration-300 [&_svg]:group-hover:text-white'>
											{step.icon}
										</div>
									</div>

									{/* Step Title & Subtitle */}
									<span className='inline-block text-[11px] font-bold uppercase tracking-wider text-matcha bg-matcha-light px-3 py-1 rounded-full mb-3'>
										{step.subtitle}
									</span>
									<h3 className='text-xl font-bold text-charcoal mb-3 group-hover:text-matcha transition-colors'>
										{step.title}
									</h3>

									{/* Step Description */}
									<p className='text-warm-gray text-sm leading-relaxed'>
										{step.description}
									</p>
								</div>

								<div className='w-full pt-6 mt-6 border-t border-border/40 text-xs font-semibold text-matcha/70 group-hover:text-matcha flex items-center justify-center gap-1'>
									<span>Phase {step.number} of 03</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};
