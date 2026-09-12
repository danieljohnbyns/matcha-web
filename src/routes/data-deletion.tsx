import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { Button, Form, Input, Result, Typography, message } from 'antd';
import { Container } from '#/components';

const { Paragraph, Text } = Typography;

const SUPPORT_EMAIL = 'hello@matchaservice.com';

/**
 * The public account-deletion page, and the URL declared to Google Play.
 *
 * It describes exactly one deletion mechanism, because exactly one exists:
 * Settings -> Account -> Delete Account inside the app, which deletes the
 * account immediately and permanently. The form at the bottom is a support
 * contact -- POST /account/delete-request records the message and emails the
 * sender instructions; it has never deleted an account and nothing consumes
 * its queue. Every claim here has to survive someone submitting that form and
 * reading the email it triggers, which says in as many words that the form
 * does not delete the account by itself.
 *
 * Removed deliberately, and not to be reintroduced without a backend that
 * performs them: a 30-day deletion timeline, email verification of ownership,
 * a "final confirmation once deletion is complete" message, and a 7-day
 * cancellation period. None of the four exist.
 */
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
				throw new Error((data as { error?: string }).error || 'Failed to send your message');
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
						title='Message Sent'
						subTitle='We have emailed you instructions. This form does not delete your account by itself — to delete it, open the Matcha app and go to Settings → Account → Delete Account. If you cannot sign in, reply to that email and we will help.'
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
					<p className='text-warm-gray text-base mt-2'>Last Updated: September 12, 2026</p>
				</div>

				<div className='text-warm-gray text-base leading-relaxed space-y-6'>
					<p>
						You can delete your Matcha account at any time, from inside the Matcha app. Deletion is
						immediate and permanent: there is no waiting period, no cancellation window, and the
						account cannot be restored afterwards.
					</p>
					<p>
						This page explains how to delete your account, what is deleted, what may be retained for
						legal or operational reasons, and how to reach us if you cannot get into the app. It is
						provided to explain Matcha&apos;s account and data deletion process for Google Play and
						our users.
					</p>

					<div className='bg-white border border-border rounded-xl p-6 mt-8'>
						<h2 className='text-xl font-bold text-charcoal mt-0 mb-3'>Delete your account</h2>
						<p className='text-charcoal font-semibold mb-2'>
							Matcha app → Settings → Account → Delete Account
						</p>
						<p className='m-0'>
							This is the only way an account is deleted. It happens as soon as you confirm.
						</p>
					</div>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>1. How to Delete Your Account</h2>
					<p>Open the Matcha app and go to:</p>
					<p className='text-charcoal font-semibold'>Settings → Account → Delete Account</p>
					<p>
						The app shows you what will happen — which bookings will be cancelled, what will be
						deleted, and what will be kept without your name — and asks you to type{' '}
						<span className='text-charcoal font-semibold'>DELETE</span> followed by your username to
						confirm.
					</p>
					<p>
						When you confirm, your account is deleted straight away. You are not placed in a queue,
						your account is not deactivated first, and there is no period during which you can change
						your mind. Deleting your account does not require you to contact support.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>2. If You Cannot Sign In</h2>
					<p>
						We cannot delete an account from this website. If you have lost access to your account —
						a forgotten password, a changed phone number, or an email address you can no longer reach
						— contact us and we will help you get back in so you can complete the deletion in the
						app.
					</p>
					<p>
						Use the form at the bottom of this page, or email{' '}
						<a href={`mailto:${SUPPORT_EMAIL}`} className='text-matcha hover:text-matcha-dark font-semibold'>
							{SUPPORT_EMAIL}
						</a>{' '}
						with the subject line &quot;Data Deletion Request&quot; and the email address associated
						with your Matcha account. We may ask for additional information where it is reasonably
						necessary to confirm the account is yours and to protect it from unauthorized deletion.
					</p>
					<p>There is no charge for any of this.</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>3. What Is Deleted</h2>
					<p>
						When you delete your account in the app, the following are permanently deleted from our
						active systems:
					</p>
					<ul className='list-disc pl-6 space-y-2'>
						<li>
							Your account and sign-in credentials, including your name, email address, phone
							number, and authentication information.
						</li>
						<li>
							Your profile, including business details, rates, availability, profile photos, and
							booking preferences.
						</li>
						<li>
							Your service listings and the photos attached to them. They are removed from public
							view and deleted.
						</li>
						<li>
							Verification documents, including any government identification and selfie you
							submitted for identity verification.
						</li>
						<li>Location information, push-notification tokens, and marketing preferences.</li>
					</ul>
					<p>
						Upcoming bookings you are part of are cancelled and the other person is notified, so
						nobody is left holding a booking with an account that no longer exists.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>
						4. What Is Kept Without Your Name
					</h2>
					<p>
						Some records belong to other people as well as to you. Completed bookings, the messages
						in a conversation, and reviews are kept as part of the other person&apos;s history, with
						your name and profile removed. Deleting your account does not erase another user&apos;s
						record of a booking they took part in.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>5. Information We May Retain</h2>
					<p>
						Some information may need to be retained for a limited period where required or permitted
						by applicable law or where necessary for legitimate purposes such as fraud prevention,
						security, legal claims, dispute resolution, tax, accounting, or regulatory compliance.
					</p>
					<p>Examples may include:</p>
					<ul className='list-disc pl-6 space-y-2'>
						<li>
							Transaction and accounting records required for tax, audit, or other legal purposes.
						</li>
						<li>
							Payment evidence, such as deposit receipts attached to a booking with another user.
						</li>
						<li>Information necessary to investigate or prevent fraud, abuse, or security incidents.</li>
						<li>Information necessary to establish, exercise, or defend legal claims.</li>
						<li>Records that we are legally required to maintain.</li>
					</ul>
					<p>
						Where information is retained, we limit it to what is reasonably necessary for the
						applicable purpose and restrict its use and access. Retained information is not used for
						marketing purposes unless otherwise permitted by law and separately disclosed.
					</p>

					<h3 className='text-lg font-semibold text-charcoal mt-8 mb-3'>Backups</h3>
					<p>
						Deleted information may remain temporarily in encrypted disaster-recovery backups. Such
						backup copies are not used for ordinary business operations and are automatically
						overwritten or deleted according to our backup-retention procedures, currently within 90
						days.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>
						6. Third-Party Service Providers
					</h2>
					<p>
						Matcha may use third-party service providers to host, secure, analyze, verify,
						communicate with users, process payments, or otherwise provide the Matcha service.
					</p>
					<p>
						Where applicable, when an account is deleted, Matcha will delete or request deletion of
						associated personal data from service providers acting on our behalf, subject to
						information they are legally required or permitted to retain.
					</p>
					<p>
						Payment providers may independently retain transaction records where required by law,
						their contractual obligations, or applicable financial regulations. Matcha does not store
						complete payment-card credentials when payment processing is performed by a third-party
						payment provider.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>7. Timing</h2>
					<p>
						<span className='text-charcoal font-semibold'>Deletion in the app is immediate.</span> The
						account and its data are removed from our active systems when you confirm, not at the end
						of a review or waiting period.
					</p>
					<p>
						<span className='text-charcoal font-semibold'>Support messages are not deletions.</span>{' '}
						If you write to us because you cannot sign in, we aim to reply within 1–2 business days.
						The account is deleted at the moment you complete the flow in the app, not when you send
						the message.
					</p>
					<p>
						Copies may persist for a short time in encrypted backups, and some records may be
						retained or kept without your name, as described in sections 4 and 5.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>
						8. Data Deletion for People Without an Account
					</h2>
					<p>
						If you interacted with Matcha without creating an account, you may still request deletion
						of personal data that Matcha holds about you.
					</p>
					<p>
						Contact{' '}
						<a href={`mailto:${SUPPORT_EMAIL}`} className='text-matcha hover:text-matcha-dark font-semibold'>
							{SUPPORT_EMAIL}
						</a>{' '}
						and provide sufficient information for us to identify the relevant interaction. We may
						request reasonable verification before processing the request.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>9. Questions or Concerns</h2>
					<p>
						For questions about account deletion or concerns about how your personal data has been
						handled, contact:
					</p>
					<p className='mt-4'>
						<strong className='text-charcoal'>Email:</strong>{' '}
						<a href={`mailto:${SUPPORT_EMAIL}`} className='text-matcha hover:text-matcha-dark font-semibold'>
							{SUPPORT_EMAIL}
						</a>
						<br />
						<strong className='text-charcoal'>Subject:</strong> Data Deletion Request — [Your Email]
					</p>
					<p>
						For additional information about how Matcha collects, uses, shares, protects, retains,
						and deletes personal data, please review our{' '}
						<Link to='/privacy' className='text-matcha hover:text-matcha-dark font-semibold'>
							Privacy Policy
						</Link>{' '}
						and{' '}
						<Link to='/terms' className='text-matcha hover:text-matcha-dark font-semibold'>
							Terms and Conditions
						</Link>
						.
					</p>

					{/* Support contact. NOT a deletion mechanism -- see the file comment. */}
					<div className='mt-16 pt-10 border-t border-border'>
						<div className='text-center mb-8'>
							<h2 className='text-2xl font-bold text-charcoal'>Cannot Sign In? Message Us</h2>
							<p className='text-warm-gray text-sm mt-2 max-w-xl mx-auto'>
								This form sends a message to Matcha support. It does not delete your account — to
								delete it, use Settings → Account → Delete Account in the app.
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

								<Form.Item label='What do you need help with? (optional)' name='reason'>
									<Input.TextArea
										placeholder='Tell us what is stopping you from signing in...'
										rows={4}
									/>
								</Form.Item>

								<Paragraph className='text-warm-gray text-sm mt-2'>
									<Text type='warning'>
										We will email you instructions. Your account is not deleted until you confirm
										it in the app.
									</Text>
								</Paragraph>

								<Form.Item className='mt-6 mb-0'>
									<Button type='primary' htmlType='submit' loading={loading} block size='large'>
										Send Message
									</Button>
								</Form.Item>

								<p className='text-center text-xs text-warm-gray mt-4 m-0'>
									Prefer email? Write to{' '}
									<a href={`mailto:${SUPPORT_EMAIL}`} className='text-matcha font-semibold'>
										{SUPPORT_EMAIL}
									</a>
								</p>
							</Form>
						</div>
					</div>
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
					'Delete your Matcha account from inside the app: Settings → Account → Delete Account. Deletion is immediate and permanent. Learn what is deleted, what is retained, and how to reach support.'
			}
		]
	})
});
