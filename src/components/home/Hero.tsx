import React from 'react';
import {
	ShieldCheck,
	Repeat,
	Sparkles,
	Lock,
	MessageSquare,
	ThumbsUp
} from 'lucide-react';
import { Container } from '#/components';

export const Hero = (): React.JSX.Element => {
	return (
		<section className='relative pt-10 sm:pt-16 md:pt-24 pb-16 sm:pb-28 md:pb-36 overflow-hidden gradient-bg-hero'>
			{/* Ambient Glowing Blobs */}
			<div className='glow-sage-blob w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] -top-20 -left-20' />
			<div className='glow-sage-blob w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] top-1/3 -right-20' />

			<Container>
				<div className='relative z-10 flex flex-col lg:flex-row items-center gap-10 sm:gap-14 lg:gap-16'>
					{/* Left Column: Text & CTAs */}
					<div className='flex-1 text-center lg:text-left w-full'>
						{/* Announcement Badge */}
						<div className='inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-matcha-light/80 border border-matcha/20 text-matcha text-[11px] sm:text-xs md:text-sm font-semibold mb-4 sm:mb-6 shadow-xs backdrop-blur-xs max-w-full'>
							<Sparkles
								size={15}
								className='text-matcha flex-shrink-0'
							/>
							<span className='truncate'>
								Trust &amp; Retention Platform for Services
							</span>
							<span className='hidden md:inline-block w-1.5 h-1.5 rounded-full bg-matcha flex-shrink-0' />
							<span className='hidden md:inline-block text-matcha/80'>
								Work Safer Together
							</span>
						</div>

						{/* Headline */}
						<h1 className='text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-charcoal leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-6'>
							Empowering Services.{' '}
							<span className='gradient-text-matcha block sm:inline mt-1 sm:mt-0'>
								Work Safer Together.
							</span>
						</h1>

						{/* Subheadline */}
						<p className='text-warm-gray text-sm sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 font-medium px-1 sm:px-0'>
							Matcha makes service provider reliability visible
							and repeat bookings automatic — connecting bookers
							and providers through protected deposits and smart
							reminders.
						</p>

						{/* CTA Buttons - Side by Side on Mobile */}
						<div className='flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-4 mb-8 sm:mb-10 w-full max-w-md mx-auto lg:mx-0 px-1 sm:px-0'>
							<button
								type='button'
								className='group relative flex-1 sm:flex-initial flex items-center justify-center gap-2 sm:gap-3.5 px-3.5 sm:px-6 py-3 sm:py-3.5 text-white bg-charcoal hover:bg-black rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
							>
								<div className='w-5 h-5 sm:w-7 sm:h-7 flex items-center justify-center flex-shrink-0'>
									<svg
										viewBox='0 0 512 512'
										className='w-4 h-4 sm:w-6 sm:h-6 fill-current'
									>
										<path d='M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-221.3 60.1 60.1L104.6 499z' />
									</svg>
								</div>
								<div className='text-left'>
									<div className='text-[8px] sm:text-[10px] uppercase tracking-wider font-semibold opacity-80'>
										GET IT ON
									</div>
									<div className='text-xs sm:text-base font-bold leading-tight font-sans whitespace-nowrap'>
										Google Play
									</div>
								</div>
							</button>

							<button
								type='button'
								className='group relative flex-1 sm:flex-initial flex items-center justify-center gap-2 sm:gap-3.5 px-3.5 sm:px-6 py-3 sm:py-3.5 text-white bg-matcha hover:bg-matcha-dark rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
							>
								<div className='w-5 h-5 sm:w-7 sm:h-7 flex items-center justify-center flex-shrink-0'>
									<svg
										viewBox='0 0 384 512'
										className='w-4 h-4 sm:w-6 sm:h-6 fill-current'
									>
										<path d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z' />
									</svg>
								</div>
								<div className='text-left'>
									<div className='text-[8px] sm:text-[10px] uppercase tracking-wider font-semibold opacity-80'>
										DOWNLOAD ON
									</div>
									<div className='text-xs sm:text-base font-bold leading-tight font-sans whitespace-nowrap'>
										App Store
									</div>
								</div>
							</button>
						</div>

						{/* Infinite Moving Feature Carousel */}
						<div className='pt-5 sm:pt-6 border-t border-border/60 overflow-hidden relative w-full max-w-xl mx-auto lg:mx-0'>
							{/* Gradient edge fade masks */}
							<div className='absolute top-0 bottom-0 left-0 w-8 sm:w-10 bg-gradient-to-r from-warm-white to-transparent z-10 pointer-events-none' />
							<div className='absolute top-0 bottom-0 right-0 w-8 sm:w-10 bg-gradient-to-l from-warm-white to-transparent z-10 pointer-events-none' />

							<div className='animate-marquee flex items-center gap-6 sm:gap-8 text-xs sm:text-sm font-semibold text-warm-gray py-1'>
								{/* First Set of Items */}
								<div className='flex items-center gap-2 flex-shrink-0'>
									<ShieldCheck
										size={18}
										className='text-matcha'
									/>
									<span>Reliability Overview</span>
								</div>
								<div className='flex items-center gap-2 flex-shrink-0'>
									<Lock size={18} className='text-matcha' />
									<span>Smart Deposit</span>
								</div>
								<div className='flex items-center gap-2 flex-shrink-0'>
									<Repeat size={18} className='text-matcha' />
									<span>Smart Reminders</span>
								</div>
								<div className='flex items-center gap-2 flex-shrink-0'>
									<ThumbsUp
										size={18}
										className='text-matcha'
									/>
									<span>3-Option Reviews</span>
								</div>
								<div className='flex items-center gap-2 flex-shrink-0 pr-6 sm:pr-8'>
									<MessageSquare
										size={18}
										className='text-matcha'
									/>
									<span>Real-Time Direct Chat</span>
								</div>

								{/* Duplicate Set of Items for Seamless Loop */}
								<div className='flex items-center gap-2 flex-shrink-0'>
									<ShieldCheck
										size={18}
										className='text-matcha'
									/>
									<span>Reliability Overview</span>
								</div>
								<div className='flex items-center gap-2 flex-shrink-0'>
									<Lock size={18} className='text-matcha' />
									<span>Smart Deposit</span>
								</div>
								<div className='flex items-center gap-2 flex-shrink-0'>
									<Repeat size={18} className='text-matcha' />
									<span>Smart Reminders</span>
								</div>
								<div className='flex items-center gap-2 flex-shrink-0'>
									<ThumbsUp
										size={18}
										className='text-matcha'
									/>
									<span>3-Option Reviews</span>
								</div>
								<div className='flex items-center gap-2 flex-shrink-0 pr-6 sm:pr-8'>
									<MessageSquare
										size={18}
										className='text-matcha'
									/>
									<span>Real-Time Direct Chat</span>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column: Phone Visual & Floating Cards */}
					<div className='flex-1 relative flex justify-center items-center w-full max-w-[340px] sm:max-w-[540px] mt-4 lg:mt-0'>
						{/* Radial glow ring behind phone */}
						<div className='absolute w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-matcha/15 blur-3xl -z-0 animate-pulse-glow' />

						{/* Floating Feature Card 1: Top Left */}
						<div className='hidden md:flex absolute -top-4 -left-4 z-20 glass-card px-3.5 py-2.5 rounded-xl items-center gap-2.5 animate-float shadow-md'>
							<div className='w-8 h-8 rounded-lg bg-matcha-light flex items-center justify-center text-matcha flex-shrink-0'>
								<ShieldCheck size={18} />
							</div>
							<div className='flex flex-col gap-0.5'>
								<span className='text-[10px] font-medium text-warm-gray leading-none'>
									Reliability Overview
								</span>
								<span className='inline-block bg-matcha text-white text-[10px] font-bold px-2 py-0.5 rounded text-center leading-tight shadow-2xs'>
									Reliable 89%
								</span>
							</div>
						</div>

						{/* Floating Feature Card 2: Top Right */}
						<div className='hidden md:flex absolute top-12 -right-4 z-20 glass-card px-3.5 py-2.5 rounded-xl items-center gap-2.5 animate-float-delayed shadow-md'>
							<div className='w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0'>
								<Lock size={18} />
							</div>
							<div className='flex flex-col gap-0.5'>
								<span className='text-xs font-bold text-charcoal leading-none'>
									Smart Deposit
								</span>
								<span className='text-[11px] text-emerald-600 font-semibold leading-tight'>
									Pending &amp; Approved
								</span>
							</div>
						</div>

						{/* Floating Feature Card 3: Bottom Left */}
						<div className='hidden md:flex absolute bottom-8 -left-6 z-20 glass-card px-3.5 py-2.5 rounded-xl items-center gap-2.5 animate-float shadow-md'>
							<div className='w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 flex-shrink-0'>
								<Repeat size={18} />
							</div>
							<div className='flex flex-col gap-0.5'>
								<span className='text-xs font-bold text-charcoal leading-none'>
									Smart Reminders
								</span>
								<span className='text-[11px] text-warm-gray font-medium leading-tight'>
									Interval Reminder
								</span>
							</div>
						</div>

						{/* Floating Feature Card 4: Bottom Right */}
						<div className='hidden md:flex absolute bottom-4 -right-6 z-20 glass-card px-3.5 py-2.5 rounded-xl items-center gap-2.5 animate-float-delayed shadow-md'>
							<div className='w-8 h-8 rounded-lg bg-sky-100/70 flex items-center justify-center text-[#008ba3] flex-shrink-0'>
								<ThumbsUp size={18} />
							</div>
							<div className='flex flex-col gap-0.5'>
								<span className='text-xs font-bold text-charcoal leading-none'>
									Reviews &amp; Ratings
								</span>
								<span className='text-[11px] text-[#008ba3] font-semibold leading-tight'>
									Recommended Reviews
								</span>
							</div>
						</div>

						{/* Main Phone Image */}
						<div className='relative z-10 transition-transform duration-500 hover:scale-[1.02] filter drop-shadow-2xl px-2 sm:px-0'>
							<img
								src='/phonedisplay.png'
								alt='Matcha App Interface Mockup'
								className='w-full max-w-[260px] sm:max-w-[360px] lg:max-w-[400px] h-auto object-contain mx-auto'
							/>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
