import React from 'react';
import { Link } from '@tanstack/react-router';
import { Instagram } from 'lucide-react';
import { Container } from './Container';

export const Footer = (): React.JSX.Element => {
	return (
		<footer className='bg-white border-t border-border/80 relative z-10'>
			<Container>
				<div className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 py-16'>
					{/* Brand Column */}
					<div className='text-center lg:text-left max-w-sm'>
						<Link
							to='/'
							className='flex items-center justify-center lg:justify-start gap-2.5 group no-underline'
						>
							<img
								src='/icon.png'
								alt='Matcha Logo'
								className='w-9 h-9 object-contain group-hover:scale-105 transition-transform'
							/>
							<span className='text-3xl font-extrabold tracking-tight text-matcha font-sans'>
								match<span style={{ color: '#4FC0D3' }}>a</span>
							</span>
						</Link>
						<p className='text-warm-gray text-sm mt-3 leading-relaxed font-medium'>
							Empowering services. Work safer together.
						</p>

						{/* Social Icons */}
						<div className='mt-6 flex items-center justify-center lg:justify-start gap-3'>
							<a
								href='https://www.instagram.com/matcha.work/'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Instagram'
								className='bg-matcha-light text-matcha hover:bg-matcha hover:text-white p-3 rounded-xl transition-all duration-200 hover:-translate-y-1 shadow-xs'
							>
								<Instagram size={18} />
							</a>
							<a
								href='https://www.facebook.com/profile.php?id=61580076397268'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Facebook'
								className='bg-matcha-light text-matcha hover:bg-matcha hover:text-white p-3 rounded-xl transition-all duration-200 hover:-translate-y-1 shadow-xs'
							>
								<svg
									viewBox='0 0 24 24'
									width='18'
									height='18'
									fill='currentColor'
								>
									<path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
								</svg>
							</a>
							<a
								href='https://www.tiktok.com/@matcha.work'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='TikTok'
								className='bg-matcha-light text-matcha hover:bg-matcha hover:text-white p-3 rounded-xl transition-all duration-200 hover:-translate-y-1 shadow-xs'
							>
								<svg
									viewBox='0 0 24 24'
									width='18'
									height='18'
									fill='currentColor'
								>
									<path d='M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z' />
								</svg>
							</a>
						</div>
					</div>

					{/* Navigation Links Columns */}
					<div className='flex flex-wrap justify-center lg:justify-end gap-10 sm:gap-16 text-center lg:text-left text-sm'>
						<div>
							<h5 className='font-bold text-charcoal mb-4 uppercase tracking-wider text-xs'>
								Platform
							</h5>
							<ul className='space-y-2.5 p-0 list-none m-0'>
								<li>
									<Link
										to='/'
										className='text-warm-gray hover:text-matcha no-underline transition-colors'
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										to='/roles'
										className='text-warm-gray hover:text-matcha no-underline transition-colors'
									>
										Roles &amp; Features
									</Link>
								</li>
								<li>
									<Link
										to='/download'
										className='text-warm-gray hover:text-matcha no-underline transition-colors'
									>
										Download App
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h5 className='font-bold text-charcoal mb-4 uppercase tracking-wider text-xs'>
								Company
							</h5>
							<ul className='space-y-2.5 p-0 list-none m-0'>
								<li>
									<Link
										to='/about'
										className='text-warm-gray hover:text-matcha no-underline transition-colors'
									>
										About Us
									</Link>
								</li>
								<li>
									<Link
										to='/feedback'
										className='text-warm-gray hover:text-matcha no-underline transition-colors'
									>
										Feedback
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h5 className='font-bold text-charcoal mb-4 uppercase tracking-wider text-xs'>
								Legal
							</h5>
							<ul className='space-y-2.5 p-0 list-none m-0'>
								<li>
									<Link
										to='/privacy'
										className='text-warm-gray hover:text-matcha no-underline transition-colors'
									>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link
										to='/terms'
										className='text-warm-gray hover:text-matcha no-underline transition-colors'
									>
										Terms &amp; Conditions
									</Link>
								</li>
								<li>
									<Link
										to='/data-deletion'
										className='text-warm-gray hover:text-matcha no-underline transition-colors'
									>
										Data Deletion
									</Link>
								</li>
								<li>
									<Link
										to='/delete-request'
										className='text-warm-gray hover:text-matcha no-underline transition-colors'
									>
										Delete Account
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Container>

			{/* Copyright Bar */}
			<div className='bg-matcha text-white/90 text-center py-4 text-xs font-medium border-t border-matcha-dark/30 flex items-center justify-center gap-1'>
				<span>
					&copy; {new Date().getFullYear()} Matcha. All rights
					reserved.
				</span>
			</div>
		</footer>
	);
};
