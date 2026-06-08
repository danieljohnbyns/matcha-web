import { Card } from 'antd';
import {
	IdcardFilled,
	CalendarFilled,
	MessageFilled,
	RocketFilled
} from '@ant-design/icons';
import { SectionHeading } from './SectionHeading';
import { Container } from '#/components';

const features = [
	{
		icon: <IdcardFilled className='text-6xl' style={{ color: '#004450' }} />,
		title: 'Showcase Your Work',
		description:
			'Build a professional profile that highlights your skills, portfolio, and availability.'
	},
	{
		icon: <CalendarFilled className='text-6xl' style={{ color: '#004450' }} />,
		title: 'Manage Bookings',
		description:
			'Let clients book appointments directly through the app with integrated scheduling.'
	},
	{
		icon: <MessageFilled className='text-6xl' style={{ color: '#004450' }} />,
		title: 'Client Communication',
		description:
			'Chat with clients in real-time, share updates, and keep everything organized.'
	},
	{
		icon: <RocketFilled className='text-6xl' style={{ color: '#004450' }} />,
		title: 'Grow Your Reach',
		description:
			'Get discovered by new clients through our community-driven discovery features.'
	}
];

export const Features = (): React.JSX.Element => {
	return (
		<section className='py-24 bg-matcha'>
			<Container>
				<div className='[&_h2]:!text-white [&_p]:!text-white/80'>
					<SectionHeading
						title='Everything You Need'
						subtitle='Powerful tools designed specifically for service providers to manage and grow their business.'
					/>
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					{features.map((feature) => (
						<Card
							key={feature.title}
							bordered={false}
							className='text-center bg-white hover:shadow-md transition-shadow rounded-[5px]'
						>
							<div className='mb-4'>{feature.icon}</div>
							<h3 className='text-lg font-semibold text-charcoal mb-2'>
								{feature.title}
							</h3>
							<p className='text-warm-gray text-sm'>
								{feature.description}
							</p>
						</Card>
					))}
				</div>
			</Container>
		</section>
	);
};
