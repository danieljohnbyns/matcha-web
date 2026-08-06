import React, { useState } from 'react';
import {
	User,
	Compass,
	MessageSquare,
	Calendar,
	ThumbsUp,
	ShieldCheck,
	CheckCircle2,
	Clock,
	Send,
	MapPin,
	Search
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Container } from '#/components';

export const Screenshots = (): React.JSX.Element => {
	const [activeTab, setActiveTab] = useState<
		'feed' | 'booking' | 'workspace' | 'chat'
	>('feed');

	const tabs = [
		{
			id: 'feed',
			label: 'Feed & Manila Search',
			icon: <Compass size={18} />
		},
		{
			id: 'booking',
			label: 'Booking & Smart Deposit',
			icon: <Calendar size={18} />
		},
		{
			id: 'workspace',
			label: 'Provider Workspace',
			icon: <User size={18} />
		},
		{
			id: 'chat',
			label: 'Real-Time Chat & Reviews',
			icon: <MessageSquare size={18} />
		}
	];

	return (
		<section className='py-24 md:py-32 bg-white overflow-hidden relative'>
			{/* Decorative ambient background shape */}
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-matcha-light/40 rounded-full blur-3xl -z-0 pointer-events-none' />

			<Container>
				<SectionHeading
					title='Explore Matcha Core Features'
					subtitle='Experience the complete platform: Manila Metro discovery, deposit verification, provider workspace, and real-time chat.'
				/>

				{/* Interactive Tab Switcher */}
				<div className='flex justify-center mt-10 mb-12 relative z-10'>
					<div className='inline-flex flex-wrap justify-center gap-2 p-2 bg-warm-white rounded-2xl border border-border/80 shadow-inner'>
						{tabs.map((tab) => {
							const isActive = activeTab === tab.id;
							return (
								<button
									key={tab.id}
									type='button'
									onClick={() => setActiveTab(tab.id as any)}
									className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer ${
										isActive
											? 'bg-matcha text-white shadow-md'
											: 'text-warm-gray hover:text-matcha hover:bg-matcha-light/50'
									}`}
								>
									{tab.icon}
									<span>{tab.label}</span>
								</button>
							);
						})}
					</div>
				</div>

				{/* Main Phone Showcase Container */}
				<div className='max-w-4xl mx-auto relative z-10'>
					<div className='glass-card rounded-3xl p-6 sm:p-10 border border-border/80 shadow-2xl flex flex-col md:flex-row items-center gap-10 bg-gradient-to-br from-white via-warm-white/90 to-matcha-light/30'>
						{/* Smartphone Frame Container */}
						<div className='w-full max-w-[320px] aspect-[9/18] bg-charcoal rounded-[44px] p-3 shadow-2xl border-4 border-charcoal/80 relative flex-shrink-0'>
							{/* Speaker & Camera Notch */}
							<div className='absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-charcoal rounded-full z-30 flex items-center justify-center'>
								<div className='w-3 h-3 rounded-full bg-white/20 mr-2' />
								<div className='w-8 h-1 rounded-full bg-white/20' />
							</div>

							{/* Phone Screen Canvas */}
							<div className='w-full h-full bg-warm-white rounded-[34px] overflow-hidden pt-8 pb-4 px-3 flex flex-col relative font-sans text-charcoal'>
								{/* VIEW 1: FEED & MANILA SEARCH */}
								{activeTab === 'feed' && (
									<div className='flex-1 flex flex-col justify-between animate-in fade-in duration-300'>
										<div>
											{/* Manila Metro City Filter Bar */}
											<div className='flex items-center justify-between text-[10px] font-bold text-matcha mb-2 px-1'>
												<span className='flex items-center gap-1'>
													<MapPin size={10} /> Manila
													Metro
												</span>
												<span className='bg-matcha-light px-2 py-0.5 rounded-full'>
													Makati • BGC • QC
												</span>
											</div>

											{/* 3-Tab Search Bar */}
											<div className='flex gap-1 bg-white p-1 rounded-xl border border-border/80 text-[10px] mb-2 font-semibold text-center'>
												<span className='flex-1 py-1 rounded-lg bg-matcha text-white'>
													For You
												</span>
												<span className='flex-1 py-1 text-warm-gray'>
													People
												</span>
												<span className='flex-1 py-1 text-warm-gray'>
													Services
												</span>
											</div>

											{/* Banner Carousel Preview */}
											<div className='bg-gradient-to-r from-matcha to-matcha-dark text-white p-2.5 rounded-xl mb-3 shadow-xs'>
												<div className='flex items-center justify-between text-[9px] font-bold uppercase tracking-wider text-emerald-200 mb-1'>
													<span>
														Featured Service
													</span>
													<span className='bg-white text-matcha px-2 py-0.5 rounded-md font-bold shadow-xs'>
														Reliable 89%
													</span>
												</div>
												<div className='font-bold text-xs'>
													Elena Hair &amp; Salon
													Studio
												</div>
												<div className='text-[9px] opacity-90'>
													Makati City • Reliability
													Overview
												</div>
											</div>

											{/* Search Recommendation Chips */}
											<div className='text-[9px] font-bold text-warm-gray mb-1'>
												Popular Searches:
											</div>
											<div className='flex flex-wrap gap-1 mb-2 text-[9px]'>
												<span className='px-2 py-0.5 bg-white border rounded-md text-charcoal'>
													#HairStyling
												</span>
												<span className='px-2 py-0.5 bg-white border rounded-md text-charcoal'>
													#PersonalTrainer
												</span>
												<span className='px-2 py-0.5 bg-white border rounded-md text-charcoal'>
													#Tutoring
												</span>
											</div>
										</div>

										<div className='text-center text-[10px] text-matcha font-bold pt-2 border-t border-border/40'>
											Pull to Refresh Feed ✓
										</div>
									</div>
								)}

								{/* VIEW 2: BOOKING & DEPOSIT SYSTEM */}
								{activeTab === 'booking' && (
									<div className='flex-1 flex flex-col justify-between animate-in fade-in duration-300'>
										<div>
											<div className='text-[10px] font-bold text-matcha uppercase tracking-wider mb-1'>
												State Machine Booking
											</div>
											<div className='font-bold text-xs text-charcoal mb-2'>
												Step 2 of 4: Deposit Upload
											</div>

											{/* Variant Selection Summary */}
											<div className='bg-white p-2 rounded-xl border border-border/60 text-[10px] mb-2'>
												<div className='font-bold text-charcoal'>
													Full Balayage + Gloss
													Variant
												</div>
												<div className='text-warm-gray text-[9px]'>
													Date: Tue, July 21 • 10:00
													AM
												</div>
											</div>

											{/* Deposit Proof Upload Box */}
											<div className='bg-matcha-light/60 p-2.5 rounded-xl border border-dashed border-matcha/40 text-center mb-2'>
												<div className='w-6 h-6 rounded-full bg-matcha text-white mx-auto mb-1 flex items-center justify-center text-[10px]'>
													✓
												</div>
												<div className='text-[10px] font-bold text-matcha'>
													Deposit Proof Uploaded
												</div>
												<div className='text-[9px] text-warm-gray'>
													GCash Receipt • ₱500.00
												</div>
											</div>

											{/* Reference Number */}
											<div className='bg-white p-2 rounded-xl border border-border/60 text-center text-[10px]'>
												<span className='text-warm-gray'>
													Reference #:{' '}
												</span>
												<span className='font-mono font-bold text-matcha'>
													MTC-8892-MNL
												</span>
											</div>
										</div>

										<button
											type='button'
											className='w-full py-2 bg-matcha text-white text-xs font-bold rounded-xl shadow-xs'
										>
											Confirm Booking Request
										</button>
									</div>
								)}

								{/* VIEW 3: PROVIDER WORKSPACE */}
								{activeTab === 'workspace' && (
									<div className='flex-1 flex flex-col justify-between animate-in fade-in duration-300'>
										<div>
											<div className='font-bold text-xs text-charcoal mb-2 flex items-center justify-between'>
												<span>Provider Workspace</span>
												<span className='text-[9px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded'>
													ID Verified
												</span>
											</div>

											{/* Tab View: Service Requests vs Smart Deposit */}
											<div className='flex gap-1 bg-white p-1 rounded-xl border border-border/80 text-[10px] mb-2 font-semibold text-center'>
												<span className='flex-1 py-1 rounded-lg text-warm-gray'>
													Requests (3)
												</span>
												<span className='flex-1 py-1 rounded-lg bg-matcha text-white'>
													Smart Deposit
												</span>
											</div>

											{/* Deposit Tracker List */}
											<div className='space-y-1.5 text-[9px]'>
												<div className='bg-white p-2 rounded-xl border border-emerald-200 flex items-center justify-between'>
													<div>
														<div className='font-bold text-charcoal'>
															Sarah M. • ₱500
															Deposit
														</div>
														<div className='text-emerald-600 font-semibold'>
															Approved ✓
														</div>
													</div>
													<span className='bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-bold'>
														Confirmed
													</span>
												</div>

												<div className='bg-white p-2 rounded-xl border border-amber-200 flex items-center justify-between'>
													<div>
														<div className='font-bold text-charcoal'>
															John D. • ₱300
															Deposit
														</div>
														<div className='text-amber-600 font-semibold'>
															Pending Verification
														</div>
													</div>
													<span className='bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-bold'>
														Verify
													</span>
												</div>
											</div>
										</div>

										{/* One Account Footer */}
										<div className='bg-white p-2 rounded-xl border border-border/60 text-[10px] flex items-center justify-between font-bold'>
											<span className='text-warm-gray'>
												Account Capabilities:
											</span>
											<span className='text-matcha bg-matcha-light px-2 py-0.5 rounded-md'>
												Booker &amp; Provider Access
											</span>
										</div>
									</div>
								)}

								{/* VIEW 4: CHAT & REVIEWS */}
								{activeTab === 'chat' && (
									<div className='flex-1 flex flex-col justify-between animate-in fade-in duration-300'>
										<div>
											{/* Profile Availability Status Indicator */}
											<div className='flex items-center justify-between text-[9px] font-bold mb-2 pb-1 border-b border-border/60'>
												<span className='text-charcoal'>
													Profile Status:
												</span>
												<div className='flex items-center gap-1.5'>
													<span className='bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold flex items-center gap-0.5'>
														<span className='w-1.5 h-1.5 rounded-full bg-emerald-500' />{' '}
														Available
													</span>
													<span className='text-warm-gray text-[8px]'>
														Away • Offline
													</span>
												</div>
											</div>

											{/* 3-Option Review System Preview */}
											<div className='bg-white p-2 rounded-xl border border-matcha/40 shadow-xs mb-2 text-[9px]'>
												<div className='font-bold text-matcha mb-1 flex items-center justify-between'>
													<span>
														3-Option Review System
													</span>
													<span className='font-bold text-emerald-600'>
														👍 Recommended
													</span>
												</div>
												<div className='text-charcoal mb-1.5'>
													“Elena was incredibly
													punctual and professional!”
												</div>
												<div className='flex gap-1.5 text-[8px] font-bold'>
													<span className='bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded'>
														👍 Recommended
													</span>
													<span className='bg-rose-100 text-rose-800 px-1.5 py-0.5 rounded'>
														👎 Not Recommended
													</span>
												</div>
											</div>
										</div>

										{/* Rebooking Nudge Notification */}
										<div className='bg-matcha text-white p-2 rounded-xl text-[9px] text-center font-bold shadow-xs'>
											🔄 Smart Nudge: Time for your 4-week
											retouch appointment!
										</div>
									</div>
								)}
							</div>
						</div>

						{/* Feature Explanation Side */}
						<div className='flex-1 text-center md:text-left'>
							{activeTab === 'feed' && (
								<div className='animate-in fade-in duration-300'>
									<span className='px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-matcha bg-matcha-light inline-block mb-3'>
										Manila Metro Service Feed
									</span>
									<h3 className='text-2xl sm:text-3xl font-extrabold text-charcoal mb-4'>
										Discover Reliable Providers Nearby
									</h3>
									<p className='text-warm-gray text-base leading-relaxed mb-6'>
										Explore curated service banners, Manila
										Metro city filters (Makati, BGC, Quezon
										City), follow suggestions, and a 3-tab
										search (For You, People, Services) with
										recommendation chips.
									</p>
									<ul className='space-y-2 text-sm text-charcoal font-medium text-left max-w-md mx-auto md:mx-0'>
										<li className='flex items-center gap-2'>
											<CheckCircle2
												size={16}
												className='text-matcha'
											/>{' '}
											Manila Metro city location filters
										</li>
										<li className='flex items-center gap-2'>
											<CheckCircle2
												size={16}
												className='text-matcha'
											/>{' '}
											3-Tab Search (For You, People,
											Services)
										</li>
										<li className='flex items-center gap-2'>
											<CheckCircle2
												size={16}
												className='text-matcha'
											/>{' '}
											Banner carousel &amp;
											pull-to-refresh
										</li>
									</ul>
								</div>
							)}

							{activeTab === 'booking' && (
								<div className='animate-in fade-in duration-300'>
									<span className='px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-matcha bg-matcha-light inline-block mb-3'>
										State Machine Booking Flow
									</span>
									<h3 className='text-2xl sm:text-3xl font-extrabold text-charcoal mb-4'>
										Protected Deposit Verification
									</h3>
									<p className='text-warm-gray text-base leading-relaxed mb-6'>
										Full booking state machine: variant
										selection → live calendar &amp; time
										slots → custom screening questions →
										deposit proof upload (image + amount) →
										instant reference number.
									</p>
									<ul className='space-y-2 text-sm text-charcoal font-medium text-left max-w-md mx-auto md:mx-0'>
										<li className='flex items-center gap-2'>
											<CheckCircle2
												size={16}
												className='text-matcha'
											/>{' '}
											Deposit proof receipt upload
											(GCash/Bank)
										</li>
										<li className='flex items-center gap-2'>
											<CheckCircle2
												size={16}
												className='text-matcha'
											/>{' '}
											Custom provider screening questions
										</li>
										<li className='flex items-center gap-2'>
											<CheckCircle2
												size={16}
												className='text-matcha'
											/>{' '}
											Automated booking reference numbers
										</li>
									</ul>
								</div>
							)}

							{activeTab === 'workspace' && (
								<div className='animate-in fade-in duration-300'>
									<span className='px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-matcha bg-matcha-light inline-block mb-3'>
										Provider Workspace
									</span>
									<h3 className='text-2xl sm:text-3xl font-extrabold text-charcoal mb-4'>
										Track Deposits &amp; ID Verification
									</h3>
									<p className='text-warm-gray text-base leading-relaxed mb-6'>
										Tab View workspace for tracking pending,
										approved, and rejected deposits
										alongside multi-step ID Verification (ID
										type → photo → selfie) and Reliability %
										scores.
									</p>
									<ul className='space-y-2 text-sm text-charcoal font-medium text-left max-w-md mx-auto md:mx-0'>
										<li className='flex items-center gap-2'>
											<CheckCircle2
												size={16}
												className='text-matcha'
											/>{' '}
											Service Requests &amp; Deposit
											Tracker tab view
										</li>
										<li className='flex items-center gap-2'>
											<CheckCircle2
												size={16}
												className='text-matcha'
											/>{' '}
											Multi-step ID Verification
											submission
										</li>
										<li className='flex items-center gap-2'>
											<CheckCircle2
												size={16}
												className='text-matcha'
											/>{' '}
											One Account for both Booker &amp;
											Provider
										</li>
									</ul>
								</div>
							)}

							{activeTab === 'chat' && (
								<div className='animate-in fade-in duration-300'>
									<span className='px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-matcha bg-matcha-light inline-block mb-3'>
										Real-Time Sync &amp; Retention
									</span>
									<h3 className='text-2xl sm:text-3xl font-extrabold text-charcoal mb-4'>
										3-Option Reviews &amp; Direct Chat
									</h3>
									<p className='text-warm-gray text-base leading-relaxed mb-6'>
										Easy-to-use platform with 1-on-1 direct
										messaging, profile availability status
										(Available, Away, Offline), an honest
										recommendation rating system
										(Recommended, Not Recommended), and
										Smart Rebooking Reminders.
									</p>
									<ul className='space-y-2 text-sm text-charcoal font-medium text-left max-w-md mx-auto md:mx-0'>
										<li className='flex items-center gap-2'>
											<CheckCircle2
												size={16}
												className='text-matcha'
											/>{' '}
											Recommendation rating (Recommended,
											Not Recommended)
										</li>
										<li className='flex items-center gap-2'>
											<CheckCircle2
												size={16}
												className='text-matcha'
											/>{' '}
											Real-time 1-on-1 chat for bookers
											&amp; providers
										</li>
										<li className='flex items-center gap-2'>
											<CheckCircle2
												size={16}
												className='text-matcha'
											/>{' '}
											Profile availability status
											(Available, Away, Offline)
										</li>
									</ul>
								</div>
							)}
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
