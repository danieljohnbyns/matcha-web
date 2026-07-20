import { useState } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Sprout } from 'lucide-react';
import { Button } from 'antd';
import { Container } from './Container';
import { LatestUpdateModal } from './LatestUpdateModal';

const navLinks = [
	{ to: '/', label: 'Home' },
	{ to: '/roles', label: 'Roles' },
	{ to: '/about', label: 'About Us' },
	{ to: '/feedback', label: 'Feedback' }
];

export const Navbar = (): React.JSX.Element => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const location = useLocation();

	return (
		<>
			<nav className='sticky top-0 z-50 glass-nav border-b border-border/70 transition-all duration-300 shadow-xs'>
				<Container>
					<div className='flex md:grid md:grid-cols-3 items-center justify-between h-20'>
						<Link
							to='/'
							className='flex items-center gap-2.5 group no-underline md:justify-self-start'
						>
							<img
								src='/icon.png'
								alt='Matcha Logo'
								className='w-9 h-9 object-contain group-hover:scale-105 transition-transform'
							/>
							<span className='text-3xl font-bold tracking-tight text-matcha no-underline font-sans'>
								match<span style={{ color: '#4FC0D3' }}>a</span>
							</span>
						</Link>

						{/* Desktop nav links */}
						<div className='hidden md:flex items-center justify-center gap-2'>
							{navLinks.map((link) => {
								const isActive = location.pathname === link.to;
								return (
									<Link
										key={link.to}
										to={link.to}
										className={`no-underline text-sm font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 ${
											isActive
												? 'bg-matcha text-white shadow-sm font-bold'
												: 'text-warm-gray hover:text-matcha hover:bg-matcha-light/70'
										}`}
									>
										{link.label}
									</Link>
								);
							})}
						</div>

						{/* Right section: Latest Update + Mobile toggle */}
						<div className='flex items-center justify-end md:justify-self-end gap-3'>
							<div className='hidden md:block'>
								<button
									type='button'
									onClick={() => setIsModalOpen(true)}
									className='btn-shiny relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-semibold text-sm cursor-pointer border border-white/20'
								>
									<span className='relative flex h-2.5 w-2.5'>
										<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75' />
										<span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400' />
									</span>
									<Sprout size={16} className='text-emerald-200' />
									<span>Latest Update</span>
								</button>
							</div>
							<div className='md:hidden'>
								<Button
									type='text'
									className='!w-10 !h-10 !rounded-xl'
									icon={mobileOpen ? <CloseOutlined className='!text-lg' /> : <MenuOutlined className='!text-lg' />}
									onClick={() => setMobileOpen(!mobileOpen)}
									aria-label='Toggle menu'
								/>
							</div>
						</div>
					</div>
				</Container>

				{/* Mobile menu */}
				{mobileOpen && (
					<div className='md:hidden glass-nav border-t border-border px-6 pb-6 pt-2 shadow-lg animate-in slide-in-from-top-2 duration-200'>
						<div className='flex flex-col gap-2 py-2'>
							{navLinks.map((link) => {
								const isActive = location.pathname === link.to;
								return (
									<Link
										key={link.to}
										to={link.to}
										className={`no-underline text-base font-semibold px-4 py-3 rounded-xl transition-colors ${
											isActive
												? 'bg-matcha text-white'
												: 'text-charcoal hover:bg-matcha-light/50'
										}`}
										onClick={() => setMobileOpen(false)}
									>
										{link.label}
									</Link>
								);
							})}
						</div>
						<button
							type='button'
							className='btn-shiny w-full py-3 rounded-xl text-white font-semibold text-base flex items-center justify-center gap-2 mt-2 border border-white/20'
							onClick={() => {
								setMobileOpen(false);
								setIsModalOpen(true);
							}}
						>
							<span className='relative flex h-2.5 w-2.5'>
								<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75' />
								<span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400' />
							</span>
							<Sprout size={18} className='text-emerald-200' />
							<span>Latest Update</span>
						</button>
					</div>
				)}
			</nav>
			<LatestUpdateModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
		</>
	);
};
