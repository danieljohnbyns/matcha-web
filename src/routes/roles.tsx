import React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Briefcase, UserCheck, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { Container } from '#/components';

const rolesList = [
	{
		title: 'Service Provider',
		badge: 'For Independent Professionals',
		icon: <Briefcase className='w-7 h-7 text-matcha' />,
		description: 'Earn trust, protect your schedule from no-shows, build loyal repeat clients, and grow predictable income.',
		features: [
			'Reliability Overview & 5-Tier Badge System',
			'Badges: New, Trusted, Reliable, Caution, Restricted',
			'Smart Deposit verification to lock bookings',
			'Automated smart rebooking reminders',
			'Reviews & Recommendations (Recommended / Not Recommended)'
		]
	},
	{
		title: 'Client / Customer',
		badge: 'For Service Seekers',
		icon: <UserCheck className='w-7 h-7 text-matcha' />,
		description: 'Discover reliable providers, book with confidence, rebook in seconds, and keep all service history in one place.',
		features: [
			'Reliability Overview & Badge verification',
			'Safe Smart Deposit appointment booking',
			'Timely interval reminders when due',
			'Seamless 1-tap rebooking',
			'Centralized booking history dashboard'
		]
	},
	{
		title: 'One Account for Everyone',
		badge: 'Universal Access',
		icon: <ShieldCheck className='w-7 h-7 text-matcha' />,
		description: 'A single Matcha account is all you need. Both bookers and providers can use the platform seamlessly with one account.',
		features: [
			'Unified single account login',
			'Universal access for both Booker & Provider',
			'Combined Reliability Overview history',
			'Shared messaging & notification center',
			'Integrated booking calendar & workspace'
		]
	}
];

const Roles = () => {
	return (
		<section className='relative py-24 md:py-32 gradient-bg-hero min-h-[85vh] flex items-center overflow-hidden'>
			<div className='glow-sage-blob w-[500px] h-[500px] top-1/3 left-1/2 -translate-x-1/2' />

			<Container>
				<div className='text-center relative z-10 max-w-3xl mx-auto mb-16'>
					<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-matcha-light/80 border border-matcha/20 text-matcha text-xs font-semibold mb-6 shadow-xs'>
						<Sparkles size={16} />
						<span>Platform Roles &amp; Capabilities</span>
					</div>

					<h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal tracking-tight leading-tight mb-6'>
						Designed for Every <span className='gradient-text-matcha'>Side of Service</span>
					</h1>
					<p className='text-warm-gray text-lg leading-relaxed'>
						Matcha connects service providers, clients, and community leads under one secure, unified ecosystem.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10'>
					{rolesList.map((role) => (
						<div
							key={role.title}
							className='glass-card p-8 rounded-3xl border border-border/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between'
						>
							<div>
								<div className='w-14 h-14 rounded-2xl bg-matcha-light flex items-center justify-center mb-6 shadow-xs'>
									{role.icon}
								</div>
								<span className='inline-block text-[11px] font-bold uppercase tracking-wider text-matcha bg-matcha-light px-3 py-1 rounded-full mb-3'>
									{role.badge}
								</span>
								<h3 className='text-2xl font-bold text-charcoal mb-3'>
									{role.title}
								</h3>
								<p className='text-warm-gray text-sm leading-relaxed mb-6'>
									{role.description}
								</p>

								<div className='border-t border-border/40 pt-4 space-y-2.5'>
									{role.features.map((feature) => (
										<div key={feature} className='flex items-center gap-2 text-xs font-medium text-charcoal'>
											<CheckCircle2 size={16} className='text-matcha flex-shrink-0' />
											<span>{feature}</span>
										</div>
									))}
								</div>
							</div>

							<div className='mt-8 pt-4 border-t border-border/40 text-center'>
								<span className='text-xs font-bold text-matcha hover:underline cursor-pointer'>
									Learn more about {role.title} &rarr;
								</span>
							</div>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
};

export const Route = createFileRoute('/roles')({ component: Roles });
