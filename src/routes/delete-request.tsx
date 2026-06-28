import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Button, Form, Input, Result, Typography, message } from 'antd';
import { Container } from '#/components';

const { Title, Paragraph, Text } = Typography;

const RouteComponent = () => {
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (values: { email: string; reason?: string }) => {
		setLoading(true);
		try {
			const res = await fetch(
				'https://api.matchaservice.com/account/delete-request',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(values)
				}
			);

			if (!res.ok) {
				const data = await res.json();
				throw new Error(data.error || 'Failed to submit request');
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
						title='Request Submitted'
						subTitle='We have sent a confirmation email to your inbox. Your account will be deleted within 30 days.'
					/>
				</Container>
			</section>
		);

	return (
		<section className='py-24 bg-warm-white min-h-[80vh] flex items-center'>
			<Container>
				<div className='max-w-lg mx-auto'>
					<Title level={2} className='text-center'>
						Request Account Deletion
					</Title>
					<Paragraph className='text-center text-warm-gray mb-8'>
						This action is permanent and cannot be undone. Your
						profile, services, reviews, and all associated data will
						be permanently removed.
					</Paragraph>

					<div className='bg-white p-8 rounded-lg border border-border'>
						<Form
							layout='vertical'
							onFinish={handleSubmit}
							autoComplete='off'
							requiredMark={false}
						>
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

							<Form.Item label='Reason (optional)' name='reason'>
								<Input.TextArea
									placeholder='Tell us why you are leaving...'
									rows={4}
								/>
							</Form.Item>

							<Paragraph className='text-warm-gray text-sm mt-4'>
								<Text type='warning'>
									Your account will be deleted within 30 days.
									You will receive a confirmation email.
								</Text>
							</Paragraph>

							<Form.Item className='mt-6'>
								<Button
									type='primary'
									danger
									htmlType='submit'
									loading={loading}
									block
									size='large'
								>
									Request Deletion
								</Button>
							</Form.Item>
						</Form>
					</div>
				</div>
			</Container>
		</section>
	);
};

export const Route = createFileRoute('/delete-request')({
	component: RouteComponent
});
