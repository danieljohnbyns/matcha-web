import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { Button, Form, Input, Result, Typography, message } from 'antd';
import {
	ShieldCheck,
	Trash2,
	Mail,
	Smartphone,
	Clock,
	Database
} from 'lucide-react';
import { Container } from '#/components';

const { Title, Paragraph, Text } = Typography;

const DataDeletion = () => {
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
				const data = await res.json().catch(() => ({}));
				throw new Error(
					(data as { error?: string }).error ||
						'Failed to submit request'
				);
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
				<Container maxWidth={800}>
					<Result
						status='success'
						title='Deletion Request Submitted'
						subTitle='We have sent a confirmation email to your inbox. Your account and associated data will be permanently deleted within 30 days. You will receive a final confirmation once deletion is complete.'
						extra={
							<Link
								to='/'
								className='text-matcha hover:text-matcha-dark font-semibold no-underline'
							>
								Back to Home
							</Link>
						}
					/>
				</Container>
			</section>
		);

	return (
		<section className='py-24 bg-warm-white'>
			<Container maxWidth={800}>
				{/* Header */}
				<div className='text-center mb-16'>
					<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-semibold mb-6'>
						<ShieldCheck size={16} />
						<span>Google Play Data Safety Compliant</span>
					</div>
					<h1 className='text-4xl md:text-5xl font-bold text-charcoal'>
						Data Deletion
					</h1>
					<p className='text-warm-gray text-base mt-3'>
						How to delete your Matcha account and data
					</p>
					<p className='text-warm-gray text-sm mt-1'>
						Last Updated: June 15, 2026
					</p>
				</div>

				<div className='text-warm-gray text-base leading-relaxed space-y-6'>
					<p>
						At Matcha (&quot;we,&quot; &quot;our,&quot; or
						&quot;us&quot;), you have full control over your
						personal data. This page explains how you can request
						deletion of your account and associated data, what will
						be deleted, what may be retained for legal reasons, and
						how long the process takes. This page is provided in
						compliance with Google Play Data Safety and User Data
						Deletion requirements.
					</p>
					<p>
						You may request deletion whether or not you still have
						the Matcha app installed. All requests are processed
						free of charge.
					</p>

					{/* How to request deletion */}
					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4 flex items-center gap-3'>
						<Trash2 className='text-matcha' size={24} />
						1. How to Request Deletion
					</h2>
					<p>
						You can delete your account and data using any of the
						following methods:
					</p>

					<div className='grid gap-4 not-prose my-6'>
						<div className='bg-white rounded-xl border border-border p-6 flex gap-4'>
							<div className='w-10 h-10 rounded-xl bg-matcha-light flex items-center justify-center shrink-0'>
								<Smartphone size={18} className='text-matcha' />
							</div>
							<div>
								<h3 className='font-bold text-charcoal text-base m-0 mb-1'>
									Option A — In the App (Recommended)
								</h3>
								<p className='text-sm m-0 leading-relaxed'>
									Open the Matcha app →{' '}
									<strong className='text-charcoal'>
										Settings
									</strong>{' '}
									→{' '}
									<strong className='text-charcoal'>
										Account
									</strong>{' '}
									→{' '}
									<strong className='text-charcoal'>
										Delete Account
									</strong>{' '}
									→ confirm. This is the fastest way and takes
									effect immediately. You will be logged out
									and your deletion window starts right away.
								</p>
							</div>
						</div>

						<div className='bg-white rounded-xl border border-border p-6 flex gap-4'>
							<div className='w-10 h-10 rounded-xl bg-matcha-light flex items-center justify-center shrink-0'>
								<Database size={18} className='text-matcha' />
							</div>
							<div>
								<h3 className='font-bold text-charcoal text-base m-0 mb-1'>
									Option B — Web Form (No Login Required)
								</h3>
								<p className='text-sm m-0 leading-relaxed'>
									Use the form at the bottom of this page.
									Enter the email address associated with your
									Matcha account. You&apos;ll receive a
									confirmation email to verify ownership
									before deletion begins.
								</p>
							</div>
						</div>

						<div className='bg-white rounded-xl border border-border p-6 flex gap-4'>
							<div className='w-10 h-10 rounded-xl bg-matcha-light flex items-center justify-center shrink-0'>
								<Mail size={18} className='text-matcha' />
							</div>
							<div>
								<h3 className='font-bold text-charcoal text-base m-0 mb-1'>
									Option C — Email Request
								</h3>
								<p className='text-sm m-0 leading-relaxed'>
									Send an email to{' '}
									<a
										href='mailto:hello@matchaservice.com'
										className='text-matcha hover:text-matcha-dark font-semibold'
									>
										hello@matchaservice.com
									</a>{' '}
									from the email address linked to your
									account with the subject line{' '}
									<strong className='text-charcoal'>
										&quot;Data Deletion Request&quot;
									</strong>
									. Include your full name and phone number if
									possible to help us verify your identity.
								</p>
							</div>
						</div>
					</div>

					<p className='text-sm bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-900'>
						<strong>Note:</strong> If you no longer have access to
						your email, please contact us at{' '}
						<a
							href='mailto:hello@matchaservice.com'
							className='text-matcha font-semibold hover:text-matcha-dark'
						>
							hello@matchaservice.com
						</a>{' '}
						and we will help verify your identity via alternative
						means.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4 flex items-center gap-3'>
						<Database className='text-matcha' size={24} />
						2. What Data Will Be Deleted
					</h2>
					<p>
						Upon verified deletion, we permanently erase or
						anonymize the following from our active databases:
					</p>
					<ul className='list-disc pl-6 space-y-2'>
						<li>
							<strong className='text-charcoal'>
								Account credentials:
							</strong>{' '}
							name, email address, phone number, hashed password,
							and authentication tokens
						</li>
						<li>
							<strong className='text-charcoal'>
								Profile information:
							</strong>{' '}
							business details, service descriptions, rates,
							availability, profile photos, and client booking
							preferences
						</li>
						<li>
							<strong className='text-charcoal'>
								Verification data:
							</strong>{' '}
							government IDs or business documents submitted for
							provider verification
						</li>
						<li>
							<strong className='text-charcoal'>
								User content:
							</strong>{' '}
							services, reviews, ratings, messages between users,
							and feedback
						</li>
						<li>
							<strong className='text-charcoal'>
								Device and usage data:
							</strong>{' '}
							device identifiers, IP addresses, app logs, and
							crash reports tied to your account
						</li>
						<li>
							<strong className='text-charcoal'>
								Location data:
							</strong>{' '}
							saved locations and geolocation history linked to
							your account
						</li>
						<li>
							<strong className='text-charcoal'>
								Push notification tokens
							</strong>{' '}
							and marketing preferences
						</li>
					</ul>
					<p>
						Your public business profile (if you were a Provider)
						will be removed from search results and no longer
						visible to other users.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>
						3. What Data May Be Retained
					</h2>
					<p>
						To comply with legal, tax, accounting, fraud prevention,
						and dispute-resolution obligations, some information may
						be retained in a restricted, non-accessible form even
						after deletion:
					</p>
					<ul className='list-disc pl-6 space-y-2'>
						<li>
							<strong className='text-charcoal'>
								Transaction records:
							</strong>{' '}
							anonymized or pseudonymized booking confirmations,
							reference IDs, amounts, and timestamps required for
							tax/audit purposes — retained up to 5 years or as
							required by Philippine law
						</li>
						<li>
							<strong className='text-charcoal'>
								Legal and safety records:
							</strong>{' '}
							information necessary to resolve disputes, enforce
							our Terms, or comply with law enforcement requests
						</li>
						<li>
							<strong className='text-charcoal'>Backups:</strong>{' '}
							residual copies may remain in encrypted backups for
							up to 90 days before automatic purging
						</li>
					</ul>
					<p>
						We{' '}
						<strong className='text-charcoal'>
							do not retain your payment card numbers, bank
							details, or mobile wallet credentials
						</strong>{' '}
						— those are processed solely by third-party payment
						gateways (e.g., card processors, GCash) under their own
						PCI-DSS compliant policies. We only hold transaction
						confirmations (reference IDs and status).
					</p>
					<p>
						Retained data is never used for marketing, profiling, or
						re-identification and is accessible only to authorized
						legal/compliance personnel.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4 flex items-center gap-3'>
						<Clock className='text-matcha' size={24} />
						4. Deletion Timeline
					</h2>
					<ul className='list-disc pl-6 space-y-2'>
						<li>
							<strong className='text-charcoal'>
								Verification:
							</strong>{' '}
							within 1–2 business days you will receive a
							confirmation email. You must confirm via the link in
							that email (for web/email requests) to start the
							deletion window.
						</li>
						<li>
							<strong className='text-charcoal'>
								Grace period:
							</strong>{' '}
							in-app deletions enter a 7-day reversible window.
							Contact us immediately if you deleted by mistake.
						</li>
						<li>
							<strong className='text-charcoal'>
								Permanent erasure:
							</strong>{' '}
							your personal data is permanently deleted or
							anonymized from active systems{' '}
							<strong className='text-charcoal'>
								within 30 days
							</strong>{' '}
							of verified request.
						</li>
						<li>
							<strong className='text-charcoal'>
								Final confirmation:
							</strong>{' '}
							we send a final email once deletion is complete.
						</li>
					</ul>
					<p className='text-sm bg-red-50 border border-red-200 rounded-lg p-4 text-red-900'>
						<strong>Warning:</strong> Deletion is permanent and
						cannot be undone. Your profile, services, reviews, and
						booking history will be permanently removed. You will
						need to create a new account if you wish to use Matcha
						again.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>
						5. Data Deletion for Non-Account Holders
					</h2>
					<p>
						If you interacted with Matcha without creating an
						account (e.g., you were invited via link or contacted
						support), you can still request deletion of any personal
						data we hold about you by emailing{' '}
						<a
							href='mailto:hello@matchaservice.com'
							className='text-matcha hover:text-matcha-dark font-semibold'
						>
							hello@matchaservice.com
						</a>{' '}
						with the details of your interaction.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>
						6. Questions or Appeals
					</h2>
					<p>
						If you have questions about this process, wish to check
						the status of your deletion request, or believe your
						data was not handled correctly, contact us at:
					</p>
					<p className='mt-4'>
						<strong className='text-charcoal'>Email:</strong>{' '}
						<a
							href='mailto:hello@matchaservice.com'
							className='text-matcha hover:text-matcha-dark font-semibold'
						>
							hello@matchaservice.com
						</a>
						<br />
						<strong className='text-charcoal'>
							Subject line:
						</strong>{' '}
						Data Deletion Request — [Your Email]
					</p>
					<p>
						You may also review our{' '}
						<Link
							to='/privacy'
							className='text-matcha hover:text-matcha-dark font-semibold'
						>
							Privacy Policy
						</Link>{' '}
						and{' '}
						<Link
							to='/terms'
							className='text-matcha hover:text-matcha-dark font-semibold'
						>
							Terms and Conditions
						</Link>{' '}
						for more information on how we process and protect your
						data.
					</p>

					{/* Web Form */}
					<div className='mt-16 pt-10 border-t border-border'>
						<div className='text-center mb-8'>
							<h2 className='text-2xl font-bold text-charcoal'>
								Request Deletion via Web Form
							</h2>
							<p className='text-warm-gray text-sm mt-2 max-w-xl mx-auto'>
								No login required. Enter the email linked to
								your Matcha account. We&apos;ll verify ownership
								via email before deleting anything.
							</p>
						</div>

						<div className='bg-white p-8 rounded-xl border border-border max-w-lg mx-auto shadow-sm'>
							<Form
								layout='vertical'
								onFinish={handleSubmit}
								autoComplete='off'
								requiredMark={false}
							>
								<Form.Item
									label='Email address'
									name='email'
									rules={[
										{
											required: true,
											message: 'Please enter your email'
										},
										{
											type: 'email',
											message:
												'Please enter a valid email'
										}
									]}
								>
									<Input
										placeholder='you@example.com'
										size='large'
									/>
								</Form.Item>

								<Form.Item
									label='Reason for leaving (optional)'
									name='reason'
								>
									<Input.TextArea
										placeholder='Tell us why you are leaving...'
										rows={4}
									/>
								</Form.Item>

								<Paragraph className='text-warm-gray text-sm mt-2'>
									<Text type='warning'>
										This action is permanent. Your account
										will be deleted within 30 days. You will
										receive a confirmation email.
									</Text>
								</Paragraph>

								<Form.Item className='mt-6 mb-0'>
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

								<p className='text-center text-xs text-warm-gray mt-4 m-0'>
									Prefer email? Write to{' '}
									<a
										href='mailto:hello@matchaservice.com'
										className='text-matcha font-semibold'
									>
										hello@matchaservice.com
									</a>
								</p>
							</Form>
						</div>
					</div>

					<p className='text-xs text-warm-gray text-center mt-10'>
						Developers: DELETE endpoint{' '}
						<code className='bg-white border border-border px-1.5 py-0.5 rounded text-xs'>
							POST
							https://api.matchaservice.com/account/delete-request
						</code>{' '}
						accepts JSON{' '}
						<code className='bg-white border border-border px-1 py-0.5 rounded text-xs'>{'{ email, reason? }'}</code>
						.
					</p>
				</div>
			</Container>
		</section>
	);
};

export const Route = createFileRoute('/data-deletion')({
	component: DataDeletion,
	head: () => ({
		meta: [
			{ title: 'Data Deletion — Matcha' },
			{
				name: 'description',
				content:
					'Request deletion of your Matcha account and personal data. Learn what is deleted, retention policy, timeline, and how to submit a deletion request via app, web form, or email.'
			}
		]
	})
});
