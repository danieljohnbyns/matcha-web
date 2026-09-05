import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { Button, Form, Input, Result, Typography, message } from 'antd';
import { Container } from '#/components';

const { Paragraph, Text } = Typography;

const DataDeletion = () => {
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (values: { email: string; reason?: string }) => {
		setLoading(true);
		try {
			const res = await fetch('https://api.matchaservice.com/account/delete-request', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(values)
			});

			if (!res.ok) {
				const data = await res.json().catch(() => ({}));
				throw new Error((data as { error?: string }).error || 'Failed to submit request');
			}

			setSubmitted(true);
		} catch (err) {
			message.error((err as Error).message);
		} finally {
			setLoading(false);
		}
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
							<Link to='/' className='text-matcha hover:text-matcha-dark font-semibold no-underline'>
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
				<div className='text-center mb-16'>
					<h1 className='text-4xl md:text-5xl font-bold text-charcoal'>Data Deletion</h1>
					<p className='text-warm-gray text-lg mt-3 font-medium'>
						How to Delete Your Matcha Account and Personal Data
					</p>
					<p className='text-warm-gray text-base mt-2'>Last Updated: June 15, 2026</p>
				</div>

				<div className='text-warm-gray text-base leading-relaxed space-y-6'>
					<p>
						At Matcha, you can request deletion of your account and associated personal data at any time.
						This page explains how to submit a deletion request, what information will be deleted, what
						information may need to be retained for legitimate legal or operational purposes, and how long
						deletion may take.
					</p>
					<p>
						This page is provided to explain Matcha&apos;s account and data deletion process for Google Play
						and our users.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>1. How to Request Deletion</h2>
					<p>You can request deletion using any of the following methods:</p>

					<h3 className='text-lg font-semibold text-charcoal mt-8 mb-3'>Option A — In the Matcha App</h3>
					<p>Open the Matcha app and go to:</p>
					<p className='text-charcoal font-semibold'>Settings → Account → Delete Account</p>
					<p>Follow the confirmation steps to submit your deletion request.</p>
					<p>
						Your account will be deactivated and removed from public visibility when the deletion process
						begins. If Matcha provides a cancellation period for deletion requests, that period and its
						effect are described below.
					</p>

					<h3 className='text-lg font-semibold text-charcoal mt-8 mb-3'>Option B — Web Form</h3>
					<p>
						You may request account and data deletion without having the Matcha app installed or logged in.
					</p>
					<p>
						Use the deletion form provided on this page and enter the email address associated with your
						Matcha account. We may send a verification message to confirm that you are authorized to request
						deletion.
					</p>

					<h3 className='text-lg font-semibold text-charcoal mt-8 mb-3'>Option C — Email</h3>
					<p>You may also request deletion by emailing:</p>
					<p>
						<a href='mailto:hello@matchaservice.com' className='text-matcha hover:text-matcha-dark font-semibold'>
							hello@matchaservice.com
						</a>
					</p>
					<p>
						Use the subject line &quot;Data Deletion Request&quot; and provide the email address associated
						with your Matcha account. We may request additional information when reasonably necessary to
						verify the request and protect your account from unauthorized deletion.
					</p>
					<p>
						If you no longer have access to your account email address, contact us and we will provide an
						alternative identity-verification process where reasonably available.
					</p>
					<p>All deletion requests are processed free of charge.</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>2. What Data Will Be Deleted</h2>
					<p>
						After a deletion request has been verified, Matcha will delete or anonymize personal data
						associated with the account from our active systems, except for information that we are required
						or permitted to retain for the purposes described below.
					</p>
					<p>Depending on the services you used, this may include:</p>
					<ul className='list-disc pl-6 space-y-2'>
						<li>
							Account information, such as your name, email address, phone number, authentication
							information, and account credentials.
						</li>
						<li>
							Profile information, including business details, service descriptions, rates, availability,
							profile photos, and booking preferences.
						</li>
						<li>
							Verification information, including government identification or business documents submitted
							for verification, subject to any applicable legal retention requirements.
						</li>
						<li>
							User-generated content, including services, reviews, ratings, messages, and feedback, where
							associated with your account.
						</li>
						<li>Device, technical, and usage information associated with your account, where applicable.</li>
						<li>Location information associated with your account, where applicable.</li>
						<li>Push-notification tokens and marketing preferences.</li>
					</ul>
					<p>
						If you operate a public Matcha provider profile, your profile will be removed from public search
						and will no longer be visible to other users after the deletion process begins.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>3. Information We May Retain</h2>
					<p>
						Some information may need to be retained for a limited period where required or permitted by
						applicable law or where necessary for legitimate purposes such as fraud prevention, security,
						legal claims, dispute resolution, tax, accounting, or regulatory compliance.
					</p>
					<p>Examples may include:</p>
					<ul className='list-disc pl-6 space-y-2'>
						<li>Transaction and accounting records required for tax, audit, or other legal purposes.</li>
						<li>Information necessary to investigate or prevent fraud, abuse, or security incidents.</li>
						<li>Information necessary to establish, exercise, or defend legal claims.</li>
						<li>Records that we are legally required to maintain.</li>
					</ul>
					<p>
						Where information is retained, we limit it to what is reasonably necessary for the applicable
						purpose and restrict its use and access.
					</p>
					<p>
						Retained information is not used for marketing purposes unless otherwise permitted by law and
						separately disclosed.
					</p>

					<h3 className='text-lg font-semibold text-charcoal mt-8 mb-3'>Backups</h3>
					<p>
						Deleted information may remain temporarily in encrypted disaster-recovery backups. Such backup
						copies are not used for ordinary business operations and are automatically overwritten or
						deleted according to our backup-retention procedures, currently within 90 days.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>4. Third-Party Service Providers</h2>
					<p>
						Matcha may use third-party service providers to host, secure, analyze, verify, communicate with
						users, process payments, or otherwise provide the Matcha service.
					</p>
					<p>
						Where applicable, when an account deletion request is completed, Matcha will delete or request
						deletion of associated personal data from service providers acting on our behalf, subject to
						information they are legally required or permitted to retain.
					</p>
					<p>
						Payment providers may independently retain transaction records where required by law, their
						contractual obligations, or applicable financial regulations. Matcha does not store complete
						payment-card credentials when payment processing is performed by a third-party payment provider.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>5. Deletion Timeline</h2>

					<h3 className='text-lg font-semibold text-charcoal mt-8 mb-3'>Verification</h3>
					<p>
						For web and email requests, we may verify ownership of the account before processing the
						deletion request. We generally aim to complete verification within 1–2 business days.
					</p>

					<h3 className='text-lg font-semibold text-charcoal mt-8 mb-3'>Cancellation Period</h3>
					<p>
						If a 7-day cancellation period applies to an in-app deletion request, you may cancel the request
						during that period by following the instructions provided by Matcha.
					</p>
					<p>During the cancellation period, your account will remain unavailable or deactivated as applicable.</p>

					<h3 className='text-lg font-semibold text-charcoal mt-8 mb-3'>Permanent Deletion</h3>
					<p>
						After verification and completion of any applicable cancellation period, eligible personal data
						will be deleted or anonymized from active systems within 30 days.
					</p>
					<p>
						Some information may remain temporarily in encrypted backups or may be retained where required
						or permitted by law, as described above.
					</p>
					<p>We will send a confirmation when the deletion process has been completed.</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>
						6. Data Deletion for People Without an Account
					</h2>
					<p>
						If you interacted with Matcha without creating an account, you may still request deletion of
						personal data that Matcha holds about you.
					</p>
					<p>
						Contact{' '}
						<a href='mailto:hello@matchaservice.com' className='text-matcha hover:text-matcha-dark font-semibold'>
							hello@matchaservice.com
						</a>{' '}
						and provide sufficient information for us to identify the relevant interaction. We may request
						reasonable verification before processing the request.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>7. Questions or Concerns</h2>
					<p>
						For questions about account deletion, the status of a deletion request, or concerns about how
						your personal data has been handled, contact:
					</p>
					<p className='mt-4'>
						<strong className='text-charcoal'>Email:</strong>{' '}
						<a href='mailto:hello@matchaservice.com' className='text-matcha hover:text-matcha-dark font-semibold'>
							hello@matchaservice.com
						</a>
						<br />
						<strong className='text-charcoal'>Subject:</strong> Data Deletion Request — [Your Email]
					</p>
					<p>
						For additional information about how Matcha collects, uses, shares, protects, retains, and
						deletes personal data, please review our{' '}
						<Link to='/privacy' className='text-matcha hover:text-matcha-dark font-semibold'>
							Privacy Policy
						</Link>{' '}
						and{' '}
						<Link to='/terms' className='text-matcha hover:text-matcha-dark font-semibold'>
							Terms and Conditions
						</Link>
						.
					</p>

					{/* Web Form */}
					<div className='mt-16 pt-10 border-t border-border'>
						<div className='text-center mb-8'>
							<h2 className='text-2xl font-bold text-charcoal'>Request Deletion via Web Form</h2>
							<p className='text-warm-gray text-sm mt-2 max-w-xl mx-auto'>
								No login required. Enter the email linked to your Matcha account. We&apos;ll verify
								ownership via email before deleting anything.
							</p>
						</div>

						<div className='bg-white p-8 rounded-xl border border-border max-w-lg mx-auto shadow-sm'>
							<Form layout='vertical' onFinish={handleSubmit} autoComplete='off' requiredMark={false}>
								<Form.Item
									label='Email address'
									name='email'
									rules={[
										{ required: true, message: 'Please enter your email' },
										{ type: 'email', message: 'Please enter a valid email' }
									]}
								>
									<Input placeholder='you@example.com' size='large' />
								</Form.Item>

								<Form.Item label='Reason for leaving (optional)' name='reason'>
									<Input.TextArea placeholder='Tell us why you are leaving...' rows={4} />
								</Form.Item>

								<Paragraph className='text-warm-gray text-sm mt-2'>
									<Text type='warning'>
										This action is permanent. Your account will be deleted within 30 days. You will
										receive a confirmation email.
									</Text>
								</Paragraph>

								<Form.Item className='mt-6 mb-0'>
									<Button type='primary' danger htmlType='submit' loading={loading} block size='large'>
										Request Deletion
									</Button>
								</Form.Item>

								<p className='text-center text-xs text-warm-gray mt-4 m-0'>
									Prefer email? Write to{' '}
									<a href='mailto:hello@matchaservice.com' className='text-matcha font-semibold'>
										hello@matchaservice.com
									</a>
								</p>
							</Form>
						</div>
					</div>

					<p className='text-xs text-warm-gray text-center mt-10'>
						Developers: DELETE endpoint{' '}
						<code className='bg-white border border-border px-1.5 py-0.5 rounded text-xs'>
							POST https://api.matchaservice.com/account/delete-request
						</code>{' '}
						accepts JSON{' '}
						<code className='bg-white border border-border px-1 py-0.5 rounded text-xs'>{`{ email, reason? }`}</code>.
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
