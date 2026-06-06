import { Card } from 'antd';
import {
	UserOutlined,
	CalendarOutlined,
	MessageOutlined,
	RiseOutlined
} from '@ant-design/icons';
import { SectionHeading } from './SectionHeading';

const features = [
	{
		icon: <UserOutlined className='text-3xl text-matcha' />,
		title: 'Showcase Your Work',
		description:
			'Build a professional profile that highlights your skills, portfolio, and availability.'
	},
	{
		icon: <CalendarOutlined className='text-3xl text-matcha' />,
		title: 'Manage Bookings',
		description:
			'Let clients book appointments directly through the app with integrated scheduling.'
	},
	{
		icon: <MessageOutlined className='text-3xl text-matcha' />,
		title: 'Client Communication',
		description:
			'Chat with clients in real-time, share updates, and keep everything organized.'
	},
	{
		icon: <RiseOutlined className='text-3xl text-matcha' />,
		title: 'Grow Your Reach',
		description:
			'Get discovered by new clients through our community-driven discovery features.'
	}
];

export const Features = (): React.JSX.Element => {
	return (
		<section className='py-24 bg-white'>
			<div className='max-w-1200px mx-auto px-6'>
				<SectionHeading
					title='Everything You Need'
					subtitle='Powerful tools designed specifically for service providers to manage and grow their business.'
				/>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					{features.map((feature) => (
						<Card
							key={feature.title}
							bordered={false}
							className='text-center bg-warm-white hover:shadow-md transition-shadow'
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
			</div>
		</section>
	);
};
