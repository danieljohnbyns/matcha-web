import React, { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Button, Input, Form, message } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import { QrCode, Sparkles, CheckCircle2, Bell } from 'lucide-react';
import { Container } from '#/components';

const Download = () => {
	const [form] = Form.useForm();
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (values: { email: string }) => {
		message.success(
			`Thanks! We'll notify ${values.email} when Matcha updates!`
		);
		setSubmitted(true);
		form.resetFields();
	};

	return (
		<section className='relative py-24 md:py-32 gradient-bg-hero min-h-[85vh] flex items-center overflow-hidden'>
			<div className='glow-sage-blob w-[500px] h-[500px] top-1/4 left-1/2 -translate-x-1/2' />

			<Container maxWidth={800}>
				<div className='text-center relative z-10'>
					{/* Badge */}
					<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-matcha-light/80 border border-matcha/20 text-matcha text-xs font-semibold mb-6 shadow-xs'>
						<Sparkles size={16} />
						<span>Available on iOS &amp; Android</span>
					</div>

					<h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal tracking-tight leading-tight mb-6'>
						Get{' '}
						<span className='gradient-text-matcha'>Matcha App</span>{' '}
						Today
					</h1>
					<p className='text-warm-gray text-lg max-w-xl mx-auto mb-12'>
						Join thousands of service providers building their
						businesses with confidence.
					</p>

					{/* Download Grid: Store Buttons & QR Scanner */}
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left max-w-3xl mx-auto'>
						{/* Card 1: App Stores */}
						<div className='glass-card p-8 rounded-3xl border border-border/80 shadow-lg flex flex-col justify-between hover:shadow-xl transition-shadow'>
							<div>
								<h3 className='text-xl font-bold text-charcoal mb-2'>
									Direct Download
								</h3>
								<p className='text-warm-gray text-xs leading-relaxed mb-6'>
									Get the native app experience directly on
									your mobile device.
								</p>

								<div className='space-y-3'>
									<Button
										type='primary'
										size='large'
										icon={
											<AndroidOutlined className='!text-xl' />
										}
										className='!bg-charcoal hover:!bg-black !border-charcoal w-full !h-14 !rounded-2xl !text-base !font-bold flex items-center justify-center gap-2 !shadow-md hover:!scale-[1.02] transition-transform'
									>
										Download for Android
									</Button>

									<Button
										type='primary'
										size='large'
										icon={
											<AppleOutlined className='!text-xl' />
										}
										className='!bg-matcha hover:!bg-matcha-dark !border-matcha w-full !h-14 !rounded-2xl !text-base !font-bold flex items-center justify-center gap-2 !shadow-md hover:!scale-[1.02] transition-transform'
									>
										Download for iOS
									</Button>
								</div>
							</div>

							<div className='mt-6 pt-4 border-t border-border/40 text-[11px] text-warm-gray flex items-center gap-1.5'>
								<CheckCircle2
									size={14}
									className='text-matcha'
								/>
								<span>
									Free download • Universal iOS &amp; Android
									support
								</span>
							</div>
						</div>

						{/* Card 2: QR Scanner */}
						<div className='glass-card p-8 rounded-3xl border border-border/80 shadow-lg text-center flex flex-col items-center justify-between hover:shadow-xl transition-shadow'>
							<div>
								<h3 className='text-xl font-bold text-charcoal mb-2'>
									Scan to Download
								</h3>
								<p className='text-warm-gray text-xs leading-relaxed mb-6'>
									Point your smartphone camera to auto-detect
									your store.
								</p>

								<div className='relative w-44 h-44 bg-white border-2 border-matcha/30 p-4 rounded-2xl mx-auto flex flex-col items-center justify-center shadow-inner group'>
									<div className='w-full h-full border border-dashed border-matcha/40 rounded-xl flex items-center justify-center bg-matcha-light/30 relative overflow-hidden'>
										<QrCode
											size={100}
											className='text-matcha/80 group-hover:scale-105 transition-transform'
										/>
										<div className='absolute inset-x-0 top-0 h-1 bg-matcha/60 shadow-md animate-pulse' />
									</div>
								</div>
							</div>

							<span className='text-xs font-semibold text-matcha mt-4'>
								Instant QR Auto-Detect
							</span>
						</div>
					</div>

					{/* Email Signup Form */}
					<div className='glass-card p-8 rounded-3xl border border-border/80 shadow-lg max-w-xl mx-auto text-left bg-gradient-to-r from-white via-warm-white to-matcha-light/40'>
						<div className='flex items-center gap-3 mb-3'>
							<div className='w-10 h-10 rounded-xl bg-matcha-light flex items-center justify-center text-matcha'>
								<Bell size={20} />
							</div>
							<div>
								<h3 className='text-lg font-bold text-charcoal m-0'>
									Get Notified About App Updates
								</h3>
								<p className='text-xs text-warm-gray m-0'>
									Be the first to get early beta access and
									platform updates.
								</p>
							</div>
						</div>

						{submitted ? (
							<div className='p-4 bg-matcha-light rounded-xl text-matcha font-bold text-sm text-center flex items-center justify-center gap-2 mt-4'>
								<CheckCircle2 size={18} />
								<span>
									You're on the VIP notification list!
								</span>
							</div>
						) : (
							<Form
								form={form}
								onFinish={handleSubmit}
								layout='vertical'
								className='mt-4'
							>
								<div className='flex flex-col sm:flex-row gap-3'>
									<Form.Item
										name='email'
										rules={[
											{
												required: true,
												message:
													'Please enter your email'
											},
											{
												type: 'email',
												message:
													'Please enter a valid email'
											}
										]}
										className='m-0 flex-1'
									>
										<Input
											placeholder='you@example.com'
											size='large'
											className='!h-12 !rounded-xl !border-border'
										/>
									</Form.Item>
									<Button
										type='primary'
										htmlType='submit'
										size='large'
										className='!bg-matcha hover:!bg-matcha-dark !h-12 !px-6 !rounded-xl !font-bold !shadow-xs'
									>
										Notify Me
									</Button>
								</div>
							</Form>
						)}
					</div>
				</div>
			</Container>
		</section>
	);
};

export const Route = createFileRoute('/download')({ component: Download });
