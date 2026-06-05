import { Link } from '@tanstack/react-router';

export const Footer = () => {
	return (
		<footer className='bg-white border-t border-border py-12'>
			<div className='max-w-1200px mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6'>
				<div className='text-center md:text-left'>
					<Link
						to='/'
						className='text-xl font-bold text-matcha no-underline'
					>
						Matcha
					</Link>
					<p className='text-warm-gray text-sm mt-1'>
						Your services. Your community.
					</p>
				</div>

				<div className='flex items-center gap-6'>
					<Link
						to='/'
						className='text-warm-gray hover:text-matcha no-underline text-sm'
					>
						Home
					</Link>
					<Link
						to='/about'
						className='text-warm-gray hover:text-matcha no-underline text-sm'
					>
						About
					</Link>
					<Link
						to='/download'
						className='text-warm-gray hover:text-matcha no-underline text-sm'
					>
						Download
					</Link>
				</div>

				<p className='text-warm-gray text-xs'>
					&copy; {new Date().getFullYear()} Matcha. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
};
