import React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Shield, Users, HeartHandshake, Sparkles } from 'lucide-react';
import { Container } from '#/components';

const values = [
	{
		icon: <Users className='w-6 h-6 text-matcha' />,
		title: 'Community-First',
		description:
			'We design every feature around fostering real, respectful connections between service providers and their clients.'
	},
	{
		icon: <Shield className='w-6 h-6 text-matcha' />,
		title: 'Safety & Trust',
		description:
			'Identity verification, transparent reviews, and clear expectations ensure every booking experience is safe and reliable.'
	},
	{
		icon: <Sparkles className='w-6 h-6 text-matcha' />,
		title: 'Simplicity',
		description:
			'No bloated menus or confusing settings. Just intuitive, fast tools that streamline your daily workflow.'
	},
	{
		icon: <HeartHandshake className='w-6 h-6 text-matcha' />,
		title: 'Empowerment',
		description:
			'Giving independent creators and small business owners full ownership over their client relationships and income.'
	}
];

const team = [
	{
		name: 'Gab Dotado',
		role: 'Founder, CEO',
		bio: 'Shapes the company’s vision and GTM strategy while leading execution. He has delivered PW4 MVPs, built a trust system, won the 3× Startup Builder HubIT Prize, and was recognized as a 2024 Global Semi-Finalist.',
		initials: 'GD'
	},
	{
		name: 'Daniel Baynosa',
		role: 'Founder, CTO',
		bio: 'Leads the technical direction of the platform with over 8 years of full-stack web and mobile development experience. He is an Alibaba Cloud & Inventa Hackathon 2025 finalist and holds a BS in Information Technology.',
		initials: 'DB'
	},
	{
		name: 'Azzy Abrencillo',
		role: 'Founder, COO',
		bio: 'Oversees GTM distribution, outreach, and user acquisition through community and social channels. She also designs behavioral trust-scoring systems and incentive mechanics.',
		initials: 'AA'
	},
	{
		name: 'Kenneth Gonzales',
		role: 'Founder, CPO',
		bio: 'Drives product strategy by designing intuitive user experiences and scalable platform features. He has built full-stack AI applications, worked as a Systems Engineer at Power MAC, and earned a BS in Computer Engineering.',
		initials: 'KG'
	}
];

const About = () => {
	return (
		<div className='bg-warm-white'>
			{/* Mission Hero */}
			<section className='relative py-24 md:py-32 gradient-bg-hero overflow-hidden'>
				<div className='glow-sage-blob w-[500px] h-[500px] -top-20 left-1/2 -translate-x-1/2' />

				<Container maxWidth={840}>
					<div className='text-center relative z-10'>
						<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-matcha-light/80 border border-matcha/20 text-matcha text-xs font-semibold mb-6 shadow-xs'>
							<Sparkles size={16} />
							<span>Our Vision</span>
						</div>
						<h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal tracking-tight leading-tight mb-6'>
							Building the Trust Infrastructure for <span className='gradient-text-matcha'>Service Businesses</span>
						</h1>
						<p className='text-warm-gray text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto font-medium text-charcoal/90 mb-4'>
							“Great service providers shouldn't lose clients because of poor systems, and clients shouldn't have to gamble on who they book.”
						</p>
						<p className='text-warm-gray text-base sm:text-lg leading-relaxed max-w-2xl mx-auto'>
							Most booking platforms stop once an appointment is booked. Matcha continues the relationship before, during, and after every service — making trust measurable and client retention automatic.
						</p>
					</div>
				</Container>
			</section>

			{/* Core Values Section */}
			<section className='py-24 bg-white border-t border-border/60 relative'>
				<Container>
					<div className='text-center mb-16 max-w-2xl mx-auto'>
						<h2 className='text-3xl sm:text-4xl font-extrabold text-charcoal mb-4'>
							Our Core Values
						</h2>
						<p className='text-warm-gray text-base'>
							The principles that guide how we build Matcha every day.
						</p>
					</div>

					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
						{values.map((value) => (
							<div
								key={value.title}
								className='glass-card p-8 rounded-2xl border border-border/80 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center'
							>
								<div className='w-14 h-14 rounded-2xl bg-matcha-light flex items-center justify-center mb-6 shadow-xs'>
									{value.icon}
								</div>
								<h3 className='text-xl font-bold text-charcoal mb-3'>
									{value.title}
								</h3>
								<p className='text-warm-gray text-sm leading-relaxed m-0'>
									{value.description}
								</p>
							</div>
						))}
					</div>
				</Container>
			</section>

			{/* Team Section */}
			<section className='py-24 bg-warm-white border-t border-border/60'>
				<Container>
					<div className='text-center mb-16 max-w-2xl mx-auto'>
						<h2 className='text-3xl sm:text-4xl font-extrabold text-charcoal mb-4'>
							Meet the Team
						</h2>
						<p className='text-warm-gray text-base'>
							The passionate people behind Matcha.
						</p>
					</div>

					<div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto'>
						{team.map((member) => (
							<div
								key={member.name}
								className='glass-card p-8 rounded-2xl border border-border/80 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
							>
								<div className='w-20 h-20 rounded-full bg-matcha text-white mx-auto mb-4 flex items-center justify-center text-xl font-bold shadow-md border-2 border-matcha-light'>
									{member.initials}
								</div>
								<h3 className='text-lg font-bold text-charcoal mb-1'>
									{member.name}
								</h3>
								<div className='text-xs font-bold text-matcha uppercase tracking-wider mb-3'>
									{member.role}
								</div>
								<p className='text-warm-gray text-xs leading-relaxed m-0'>
									{member.bio}
								</p>
							</div>
						))}
					</div>
				</Container>
			</section>
		</div>
	);
};

export const Route = createFileRoute('/about')({ component: About });
