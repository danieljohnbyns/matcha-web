import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import {
	Button,
	Form,
	Input,
	Result,
	Select,
	message
} from 'antd';
import { Sparkles, MessageSquareHeart } from 'lucide-react';
import { Container } from '#/components';

const API_BASE = 'https://api.matchaservice.com';

const CATEGORIES = [
	{ value: 'general', label: 'General Feedback' },
	{ value: 'bug', label: 'Bug Report' },
	{ value: 'feature', label: 'Feature Request' },
	{ value: 'other', label: 'Other' }
];

const RouteComponent = () => {
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (values: {
		name: string;
		email: string;
		category: string;
		message: string;
	}) => {
		setLoading(true);
		try {
			const res = await fetch(`${API_BASE}/feedback`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(values)
			});

			if (!res.ok) {
				const data = await res.json();
				throw new Error(data.error || 'Failed to submit feedback');
			};

			setSubmitted(true);
		} catch (err) {
			message.error((err as Error).message);
		} finally {
			setLoading(false);
		};
	};

	if (submitted)
		return (
			<section className='relative py-24 md:py-32 gradient-bg-hero min-h-[85vh] flex items-center overflow-hidden'>
				<Container maxWidth={600}>
					<div className='glass-card p-10 rounded-3xl border border-border/80 shadow-2xl text-center bg-white/90'>
						<Result
							status='success'
							title={<span className='text-2xl font-extrabold text-charcoal'>Thank You!</span>}
							subTitle={<span className='text-warm-gray text-base'>Your feedback has been received. We appreciate you taking the time to help us improve Matcha!</span>}
						/>
					</div>
				</Container>
			</section>
		);

	return (
		<section className='relative py-24 md:py-32 gradient-bg-hero min-h-[85vh] flex items-center overflow-hidden'>
			<div className='glow-sage-blob w-[500px] h-[500px] top-1/3 left-1/2 -translate-x-1/2' />

			<Container maxWidth={680}>
				<div className='relative z-10 max-w-xl mx-auto'>
					{/* Header */}
					<div className='text-center mb-10'>
						<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-matcha-light/80 border border-matcha/20 text-matcha text-xs font-semibold mb-4 shadow-xs'>
							<Sparkles size={16} />
							<span>We're Listening</span>
						</div>
						<h1 className='text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight mb-3'>
							We Value Your <span className='gradient-text-matcha'>Feedback</span>
						</h1>
						<p className='text-warm-gray text-base leading-relaxed'>
							Help us improve Matcha by sharing your thoughts, suggestions, or reporting issues.
						</p>
					</div>

					<div className='glass-card p-8 sm:p-10 rounded-3xl border border-border/80 shadow-2xl bg-white/95'>
						<div className='flex items-center gap-3 mb-6 pb-4 border-b border-border/40'>
							<div className='w-10 h-10 rounded-xl bg-matcha-light flex items-center justify-center text-matcha'>
								<MessageSquareHeart size={20} />
							</div>
							<div>
								<h3 className='text-base font-bold text-charcoal m-0'>Send Us a Message</h3>
								<p className='text-xs text-warm-gray m-0'>All responses go straight to our product team.</p>
							</div>
						</div>

						<Form
							layout='vertical'
							onFinish={handleSubmit}
							autoComplete='off'
							requiredMark={false}
						>
							<Form.Item
								label={<span className='font-semibold text-charcoal text-xs'>Your Name</span>}
								name='name'
								rules={[
									{
										required: true,
										message: 'Please enter your name'
									}
								]}
							>
								<Input
									placeholder='Your name'
									size='large'
									className='!rounded-xl !h-12 !border-border'
								/>
							</Form.Item>

							<Form.Item
								label={<span className='font-semibold text-charcoal text-xs'>Email Address</span>}
								name='email'
								rules={[
									{
										required: true,
										type: 'email',
										message: 'Please enter a valid email'
									}
								]}
							>
								<Input
									placeholder='you@example.com'
									size='large'
									className='!rounded-xl !h-12 !border-border'
								/>
							</Form.Item>

							<Form.Item
								label={<span className='font-semibold text-charcoal text-xs'>Feedback Category</span>}
								name='category'
								initialValue='general'
							>
								<Select
									options={CATEGORIES}
									size='large'
									className='[&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!h-12 [&_.ant-select-selection-item]:!leading-[46px]'
								/>
							</Form.Item>

							<Form.Item
								label={<span className='font-semibold text-charcoal text-xs'>Message</span>}
								name='message'
								rules={[
									{
										required: true,
										message: 'Please enter your feedback'
									},
									{
										min: 10,
										message:
											'Message must be at least 10 characters'
									}
								]}
							>
								<Input.TextArea
									placeholder='Tell us what is on your mind...'
									rows={5}
									className='!rounded-xl !border-border'
								/>
							</Form.Item>

							<Form.Item className='mt-6 mb-0'>
								<Button
									type='primary'
									htmlType='submit'
									loading={loading}
									block
									size='large'
									className='!bg-matcha hover:!bg-matcha-dark !h-14 !rounded-2xl !font-bold !text-base !shadow-md'
								>
									Submit Feedback
								</Button>
							</Form.Item>
						</Form>
					</div>
				</div>
			</Container>
		</section>
	);
};

export const Route = createFileRoute('/feedback')({
	component: RouteComponent
});
