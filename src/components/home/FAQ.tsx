import React from 'react';
import { Collapse } from 'antd';
import { Link } from '@tanstack/react-router';
import { HelpCircle, MessageSquarePlus } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Container } from '#/components';

const faqs = [
	{
		key: '1',
		label: 'What is Matcha?',
		children:
			'Matcha is a trust and retention platform for service businesses. Beyond scheduling, Matcha helps providers build a verifiable reputation and automatically brings clients back for repeat appointments.'
	},
	{
		key: '2',
		label: 'What is the Reliability Overview and Badge System?',
		children:
			'Every provider and booker builds a transparent Reliability Overview connected to Matcha\'s 5-tier Badge System: New, Trusted, Reliable, Caution, and Restricted. Rather than relying solely on star reviews, badges make real punctuality and commitment visible.'
	},
	{
		key: '3',
		label: 'How does Smart Deposit protect my time?',
		children:
			'Bookings are only officially confirmed after the client uploads deposit proof and the provider verifies it. This eliminates last-minute no-shows, protects schedule slots, and ensures clients are committed.'
	},
	{
		key: '4',
		label: 'How do Smart Rebooking Reminders work?',
		children:
			'After a service is completed, Matcha automatically calculates the optimal rebooking window based on the service category (e.g. 4–6 weeks for hair/nails, weekly for tutoring) and sends friendly automated reminders so clients never forget to rebook.'
	},
	{
		key: '5',
		label: 'Can I use Matcha as both a Booker and a Provider?',
		children:
			'Yes! A single Matcha account allows both bookers and providers to use all platform features seamlessly without needing to create separate profiles.'
	},
	{
		key: '6',
		label: 'How does Matcha\'s Review System work?',
		children:
			'Instead of generic star ratings, Matcha uses an honest recommendation system: Recommended (👍) or Not Recommended (👎) alongside written reviews for transparent, effortless feedback.'
	}
];

export const FAQ = (): React.JSX.Element => {
	return (
		<section className='py-24 md:py-32 bg-warm-white relative overflow-hidden'>
			<Container maxWidth={760}>
				<SectionHeading
					title='Frequently Asked Questions'
					subtitle='Have questions? We have got answers.'
				/>

				<div className='mt-12 space-y-4'>
					<Collapse
						accordion
						ghost
						expandIconPosition='end'
						className='[&_.ant-collapse-item]:!border [&_.ant-collapse-item]:!border-border/80 [&_.ant-collapse-item]:!bg-white/90 [&_.ant-collapse-item]:!rounded-2xl [&_.ant-collapse-item]:!mb-4 [&_.ant-collapse-item]:!overflow-hidden [&_.ant-collapse-item]:!shadow-xs [&_.ant-collapse-item-active]:!border-matcha/50 [&_.ant-collapse-item-active]:!shadow-md transition-all'
						items={faqs.map((faq) => ({
							key: faq.key,
							label: (
								<div className='flex items-center gap-3 py-2'>
									<div className='w-8 h-8 rounded-xl bg-matcha-light flex items-center justify-center text-matcha flex-shrink-0'>
										<HelpCircle size={18} />
									</div>
									<span className='text-base font-bold text-charcoal'>
										{faq.label}
									</span>
								</div>
							),
							children: (
								<p className='text-warm-gray text-sm leading-relaxed pl-11 m-0 pb-2'>
									{faq.children}
								</p>
							)
						}))}
					/>
				</div>

				{/* Bottom Support CTA Banner */}
				<div className='mt-12 glass-card p-6 rounded-2xl border border-matcha/20 text-center flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-matcha-light/60 to-white'>
					<div className='text-left'>
						<h4 className='font-bold text-base text-charcoal m-0'>Still have questions or feedback?</h4>
						<p className='text-xs text-warm-gray m-0 mt-0.5'>We would love to hear from you and help you get started.</p>
					</div>
					<Link
						to='/feedback'
						className='no-underline bg-matcha hover:bg-matcha-dark text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-sm transition-all flex items-center gap-2 flex-shrink-0'
					>
						<MessageSquarePlus size={16} />
						Send Feedback
					</Link>
				</div>
			</Container>
		</section>
	);
};
