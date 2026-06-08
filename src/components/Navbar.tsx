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
	{ to: '/about', label: 'About us' },
	{ to: '/feedback', label: 'Feedback' }
];

export const Navbar = (): React.JSX.Element => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const location = useLocation();

	return (
		<>
			<nav className='sticky top-0 z-50 bg-white border-b border-border'>
				<Container>
					<div className='flex md:grid md:grid-cols-3 items-center justify-between h-16'>
						<Link
							to='/'
							className='text-4xl font-semibold text-matcha no-underline md:justify-self-start'
						>
						matcha
						</Link>

						{/* Desktop nav links */}
						<div className='hidden md:flex items-center justify-center gap-8'>
							{navLinks.map((link) => (
								<Link
									key={link.to}
									to={link.to}
									className={`no-underline text-base font-medium transition-colors ${
										location.pathname === link.to
											? 'text-matcha'
											: 'text-warm-gray hover:text-matcha'
									}`}
								>
									{link.label}
								</Link>
							))}
						</div>

						{/* Right section: Latest Update + Mobile toggle */}
						<div className='flex items-center justify-end md:justify-self-end gap-8'>
							<div className='hidden md:block'>
								<Button type='primary' className='font-semibold' icon={<Sprout size={16} />} onClick={() => setIsModalOpen(true)}>
								Latest Update
								</Button>
							</div>
							<div className='md:hidden'>
								<Button
									type='text'
									icon={mobileOpen ? <CloseOutlined /> : <MenuOutlined />}
									onClick={() => setMobileOpen(!mobileOpen)}
									aria-label='Toggle menu'
								/>
							</div>
						</div>
					</div>
				</Container>

				{/* Mobile menu */}
				{mobileOpen && (
					<div className='md:hidden bg-white border-t border-border px-6 lg:px-12 xl:px-16 pb-4'>
						{navLinks.map((link) => (
							<Link
								key={link.to}
								to={link.to}
								className={`block py-3 no-underline text-base font-medium ${
									location.pathname === link.to
										? 'text-matcha'
										: 'text-warm-gray'
								}`}
								onClick={() => setMobileOpen(false)}
							>
								{link.label}
							</Link>
						))}
						<Button type='primary' block className='font-semibold mt-2' icon={<Sprout size={16} />} onClick={() => { setMobileOpen(false); setIsModalOpen(true); }}>
						Latest Update
						</Button>
					</div>
				)}
			</nav>
			<LatestUpdateModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
		</>
	);
};
