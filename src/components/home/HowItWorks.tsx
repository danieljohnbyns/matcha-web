import { SectionHeading } from './SectionHeading';

const steps = [
	{
		number: '01',
		title: 'Create Your Profile',
		description: 'Set up your professional profile with your services, portfolio, and availability.'
	},
	{
		number: '02',
		title: 'Connect with Clients',
		description: 'Get discovered by clients looking for your services and start building relationships.'
	},
	{
		number: '03',
		title: 'Grow Your Business',
		description: 'Manage bookings, communicate seamlessly, and watch your client base expand.'
	}
];

export const HowItWorks = () => {
	return (
		<section className='py-24 bg-warm-white'>
			<div className='max-w-[1200px] mx-auto px-6'>
				<SectionHeading
					title='How It Works'
					subtitle='Get started in three simple steps.'
				/>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
					{steps.map((step) => (
						<div key={step.number} className='text-center'>
							<span className='text-5xl font-bold text-matcha-light'>{step.number}</span>
							<h3 className='text-xl font-semibold text-charcoal mt-4 mb-2'>{step.title}</h3>
							<p className='text-warm-gray'>{step.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
