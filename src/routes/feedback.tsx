import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import {
	Button,
	Form,
	Input,
	Result,
	Select,
	Typography,
	message
} from 'antd';
import { Container } from '#/components';

const { Title, Paragraph } = Typography;

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
			<section className='py-24 bg-warm-white min-h-[80vh] flex items-center'>
				<Container>
					<Result
						status='success'
						title='Thank You!'
						subTitle='Your feedback has been received. We appreciate you taking the time to help us improve Matcha.'
					/>
				</Container>
			</section>
		);

	return (
		<section className='py-24 bg-warm-white min-h-[80vh] flex items-center'>
			<Container>
				<div className='max-w-lg mx-auto'>
					<Title level={2} className='text-center'>
						We Value Your Feedback
					</Title>
					<Paragraph className='text-center text-warm-gray mb-8'>
						Help us improve Matcha by sharing your thoughts,
						suggestions, or reporting any issues you have
						encountered.
					</Paragraph>

					<div className='bg-white p-8 rounded-lg border border-border'>
						<Form
							layout='vertical'
							onFinish={handleSubmit}
							autoComplete='off'
							requiredMark={false}
						>
							<Form.Item
								label='Name'
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
								/>
							</Form.Item>

							<Form.Item
								label='Email'
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
								/>
							</Form.Item>

							<Form.Item
								label='Category'
								name='category'
								initialValue='general'
							>
								<Select
									options={CATEGORIES}
									size='large'
								/>
							</Form.Item>

							<Form.Item
								label='Message'
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
									rows={6}
								/>
							</Form.Item>

							<Form.Item className='mt-6'>
								<Button
									type='primary'
									htmlType='submit'
									loading={loading}
									block
									size='large'
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
