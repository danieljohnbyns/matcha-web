import React from 'react';
import {
	ShieldCheck,
	Lock,
	Repeat,
	Zap,
	UserCheck,
	History,
	ArrowUpRight
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Container } from '#/components';

const features = [
	{
		icon: <ShieldCheck className='w-7 h-7 text-matcha' />,
		badge: 'Trust Infrastructure',
		title: 'Reliability Overview & Badges',
		description:
			'Every user builds a Reliability Overview linked to a 5-tier Badge System (New, Trusted, Reliable, Caution, Restricted) for complete accountability.',
		tag: 'Badge System'
	},
	{
		icon: <Lock className='w-7 h-7 text-matcha' />,
		badge: 'Financial Security',
		title: 'Smart Deposit System',
		description:
			'Bookers upload deposit proof (image & amount). Providers manage pending, approved, and rejected deposits in a dedicated Tab View workspace.',
		tag: 'Smart Deposit'
	},
	{
		icon: <Zap className='w-7 h-7 text-matcha' />,
		badge: 'End-to-End Booking',
		title: 'Full State Machine Booking',
		description:
			'Variant selection → live calendar & time slots → custom screening questions → review summary → instant reference number confirmation.',
		tag: 'Smooth Flow'
	},
	{
		icon: <Repeat className='w-7 h-7 text-matcha' />,
		badge: 'Automated Retention',
		title: 'Smart Reminders & Nudge Modal',
		description:
			'Category-based rebooking intervals (4–6 weeks for hair/beauty, weekly for tutoring) plus post-completion rebooking nudge modals.',
		tag: 'Client Retention'
	},
	{
		icon: <UserCheck className='w-7 h-7 text-matcha' />,
		badge: 'Universal Access',
		title: 'One Account for Everyone',
		description:
			'A single Matcha account is all you need — both bookers and providers can use the app seamlessly with one single login.',
		tag: 'One Account'
	},
	{
		icon: <History className='w-7 h-7 text-matcha' />,
		badge: 'Transparent Feedback',
		title: 'Review System & Easy UI',
		description:
			'Clean, easy-to-use interface featuring an honest recommendation system (Recommended or Not Recommended) alongside written reviews.',
		tag: 'Simple & Transparent'
	}
];

export const Features = (): React.JSX.Element => {
	return (
		<section className='relative py-24 md:py-32 bg-matcha overflow-hidden'>
			{/* Subtle background glow */}
			<div className='absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none' />
			<div className='absolute bottom-0 left-0 w-96 h-96 bg-matcha-dark/40 rounded-full blur-3xl pointer-events-none' />

			<Container>
				<div className='[&_h2]:!text-white [&_p]:!text-white/80 mb-16 text-center max-w-3xl mx-auto'>
					<SectionHeading
						title='Built on Trust &amp; Retention'
						subtitle='Matcha goes far beyond simple scheduling. We provide the complete trust infrastructure for service businesses to thrive.'
					/>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10'>
					{features.map((feature) => (
						<div
							key={feature.title}
							className='group relative bg-white/95 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden'
						>
							<div>
								{/* Icon Header & Tag */}
								<div className='flex items-center justify-between mb-6'>
									<div className='w-14 h-14 rounded-2xl bg-matcha-light flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-matcha group-hover:text-white transition-all duration-300 [&_svg]:group-hover:text-white'>
										{feature.icon}
									</div>
									<span className='px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-matcha-light text-matcha'>
										{feature.tag}
									</span>
								</div>

								{/* Title */}
								<h3 className='text-xl font-bold text-charcoal mb-3 group-hover:text-matcha transition-colors flex items-center gap-1.5'>
									{feature.title}
									<ArrowUpRight size={16} className='opacity-0 group-hover:opacity-100 transition-opacity text-matcha' />
								</h3>

								{/* Description */}
								<p className='text-warm-gray text-sm leading-relaxed mb-6'>
									{feature.description}
								</p>
							</div>

							<div className='pt-4 border-t border-border/40 text-xs font-semibold text-matcha flex items-center justify-between'>
								<span>{feature.badge}</span>
								<span className='w-2 h-2 rounded-full bg-matcha/40 group-hover:bg-matcha transition-colors' />
							</div>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
};
