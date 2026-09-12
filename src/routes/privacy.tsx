import { createFileRoute, Link } from '@tanstack/react-router';
import { Container } from '#/components';

const Privacy = () => {
	return (
		<section className='py-24 bg-warm-white'>
			<Container maxWidth={800}>
				<div className='text-center mb-16'>
					<h1 className='text-4xl md:text-5xl font-bold text-charcoal'>
						Privacy Policy
					</h1>
					<p className='text-warm-gray text-base mt-2'>
						Last Updated: September 12, 2026
					</p>
				</div>

				<div className='text-warm-gray text-base leading-relaxed space-y-6'>
					<p>
						Matcha (&quot;we,&quot; &quot;our,&quot; or
						&quot;us&quot;) is committed to protecting your privacy.
						This Privacy Policy explains how we collect, use,
						disclose, and safeguard your information when you use
						our mobile application and our website (collectively,
						the &quot;Service&quot;).
					</p>
					<p>
						By using the Service, you agree to the collection and
						use of information in accordance with this policy. If
						you do not agree with the terms of this Privacy Policy,
						please do not access the application.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>
						1. Information We Collect
					</h2>
					<p>
						To provide a functional marketplace connecting service
						providers and clients, we collect several types of
						information.
					</p>

					<h3 className='text-lg font-semibold text-charcoal mt-8 mb-3'>
						A. Personal Data You Provide Voluntarily
					</h3>
					<ul className='list-disc pl-6 space-y-2'>
						<li>
							<strong className='text-charcoal'>
								Account Credentials:
							</strong>{' '}
							Name, username, email address, date of birth and
							password are created when you register. We do not ask for
							or store a phone number.
						</li>
						<li>
							<strong className='text-charcoal'>
								Profile Information:
							</strong>{' '}
							If you are a Service Provider
							(&quot;Provider&quot;), we collect business details,
							descriptions of services offered, rates,
							availability, and profile photos. If you are a
							Service Client (&quot;Client&quot;), we collect
							information necessary to book a service.
						</li>
						<li>
							<strong className='text-charcoal'>
								Verification Data:
							</strong>{' '}
							Government-issued identification or business
							documentation if required to verify provider
							accounts.
						</li>
						<li>
							<strong className='text-charcoal'>
								Payment Instructions You Publish:
							</strong>{' '}
							If you are a Provider and you require a deposit, we
							store the payment instructions you choose to add to
							your listing &mdash; such as a bank or e-wallet
							provider, account name, account number, and a payment QR
							image. You enter these yourself so Clients know where to
							send a deposit, and they are shown only to a Client with
							a booking on that service.
						</li>
						<li>
							<strong className='text-charcoal'>
								Proof of Payment:
							</strong>{' '}
							If you are a Client and you upload an image of a deposit
							receipt, we store that image and the amount you entered,
							and share them with the Provider on that booking so they
							can confirm the deposit. A receipt image contains
							whatever is visible in the screenshot you upload, so
							please crop out anything you do not want the Provider to
							see.
						</li>
						<li>
							<strong className='text-charcoal'>
								Addresses:
							</strong>{' '}
							The service and booking addresses you type in, including
							region, city or municipality, barangay, street and
							postal code.
						</li>
					</ul>

					<h3 className='text-lg font-semibold text-charcoal mt-8 mb-3'>
						B. Information Collected Automatically
					</h3>
					<ul className='list-disc pl-6 space-y-2'>
						<li>
							<strong className='text-charcoal'>
								Device and Usage Data:
							</strong>{' '}
							IP address, device and operating system type, and the app
							version, build and update identifier of the copy you are
							running. Matcha does not include an advertising or
							analytics SDK, and does not build an advertising profile
							of you.
						</li>
						<li>
							<strong className='text-charcoal'>
								Push Notification Token:
							</strong>{' '}
							If you allow notifications, we store the push token your
							device issues so we can send you booking and message
							alerts. You can turn notifications off at any time in
							your device settings.
						</li>
						<li>
							<strong className='text-charcoal'>
								Location Data:
							</strong>{' '}
							Matcha does not access your GPS and does not collect
							precise geolocation. Location in the app is only the
							address you type in yourself when you set up a service,
							save an address, or book.
						</li>
					</ul>

					<h3 className='text-lg font-semibold text-charcoal mt-8 mb-3'>
						C. Payment Information
					</h3>
					<p>
						Matcha does not process payments. There is no checkout in the
						app, no payment gateway, and no card entry. We never collect,
						receive or store credit or debit card numbers, CVVs, online
						banking credentials, e-wallet log-ins or payment processor
						tokens, and we do not hold funds or act as an escrow agent.
					</p>
					<p>
						Payment for a booking is arranged and settled directly between
						the Client and the Provider, outside the Service. The only
						payment-related information we hold is what a user types or
						uploads themselves: the payment instructions a Provider
						publishes on a listing, and the deposit receipt image and
						amount a Client uploads. Both are described in section A above.
					</p>
					<p>
						Cash Payments: For bookings settled in cash between Clients and
						Providers, nothing is captured by the Service unless a user
						chooses to upload a receipt image.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>
						2. How We Use Your Information
					</h2>
					<p>
						We use the collected data for specific, lawful purposes,
						including to:
					</p>
					<ul className='list-disc pl-6 space-y-2'>
						<li>
							Facilitate account creation, user authentication,
							and profile hosting.
						</li>
						<li>
							Connect clients with nearby service providers based
							on location preferences.
						</li>
						<li>
							Manage bookings, record deposit confirmations between
							users, and send automated booking notifications.
						</li>
						<li>
							Provide customer support and resolve user-to-user
							disputes.
						</li>
						<li>
							Monitor app performance, diagnose bugs, and improve
							overall user experience.
						</li>
						<li>
							Comply with legal obligations and prevent fraudulent
							activity on the platform.
						</li>
					</ul>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>
						3. Data Sharing and Disclosure
					</h2>
					<p>
						We do not sell your personal data. We share your
						information only in the following scenarios:
					</p>
					<ul className='list-disc pl-6 space-y-2'>
						<li>
							<strong className='text-charcoal'>
								Between Users:
							</strong>{' '}
							To make the marketplace function, a provider&rsquo;s
							business profile is visible to all users. When a booking
							is confirmed, the details needed to carry it out &mdash;
							such as name, the booking address, and any deposit
							instructions or receipt &mdash; are shared between the
							client and the provider.
						</li>
						<li>
							<strong className='text-charcoal'>
								Service Providers:
							</strong>{' '}
							We share data with the vendors that run the Service for
							us: Supabase (database, authentication, file storage and
							realtime messaging), Expo (app distribution, over-the-air
							updates and push delivery), Google or Apple sign-in if you
							use them, Google Calendar if you connect it, and our email
							delivery provider. We do not use an analytics or
							advertising vendor, and we do not use a payment processor.
							These parties are contractually obligated to protect your
							data.
						</li>
						<li>
							<strong className='text-charcoal'>
								Legal Requirements:
							</strong>{' '}
							We may disclose data if required by law, subpoena,
							or to protect the safety, rights, and property of
							our users or the public.
						</li>
					</ul>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>
						4. Your Rights and Data Control
					</h2>
					<p>
						We believe you should have complete control over your
						personal information. Depending on your location, you
						have the following rights:
					</p>
					<ul className='list-disc pl-6 space-y-2'>
						<li>
							<strong className='text-charcoal'>
								Access and Update:
							</strong>{' '}
							You can view and edit your profile data at any time
							directly through the app&rsquo;s account settings.
						</li>
						<li>
							<strong className='text-charcoal'>
								Revoke Permissions:
							</strong>{' '}
							You can withdraw consent for push notifications, photo
							library access, or the camera at any time via your mobile
							device settings.
						</li>
						<li>
							<strong className='text-charcoal'>
								Data Portability:
							</strong>{' '}
							You may request a copy of the personal data we hold
							about you.
						</li>
					</ul>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>
						5. Account and Data Deletion (Google Play Compliance)
					</h2>
					<p>
						In compliance with Google Play requirements, we provide
						a straightforward way to delete your account and all
						associated data.
					</p>
					<ul className='list-disc pl-6 space-y-2'>
						<li>
							<strong className='text-charcoal'>
								In-App Deletion:
							</strong>{' '}
							You can trigger permanent account deletion inside
							the app by navigating to Settings &gt; Account &gt;
							Delete Account.
						</li>
						<li>
							<strong className='text-charcoal'>Timing:</strong>{' '}
							Deletion is immediate. When you confirm in the app
							we erase or anonymize your personal data in our
							active databases straight away — there is no waiting
							period and no cancellation window — except where
							retention is legally mandated (such as tax or
							financial transaction history). Copies may persist
							briefly in encrypted backups.
						</li>
						<li>
							<strong className='text-charcoal'>Lost access:</strong>{' '}
							If you cannot sign in, see our{' '}
							<Link
								to='/data-deletion'
								className='text-matcha hover:text-matcha-dark font-semibold'
							>
								Data Deletion
							</Link>{' '}
							page. We cannot delete an account from the website;
							support will help you regain access so you can
							complete the deletion in the app.
						</li>
					</ul>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>
						6. Security of Your Data
					</h2>
					<p>
						We implement commercial-grade administrative, technical,
						and physical security measures to protect your personal
						information. However, please remember that no method of
						transmission over the internet or method of electronic
						storage is 100% secure, and we cannot guarantee absolute
						security.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>
						7. Children&rsquo;s Privacy
					</h2>
					<p>
						Our Service is not intended for use by individuals under
						the age of 18. We do not knowingly collect personal data
						from children. If we discover that a child under 18 has
						provided us with personal information, we will delete it
						immediately.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>
						8. Changes to This Privacy Policy
					</h2>
					<p>
						We may update our Privacy Policy from time to time. We
						will notify you of any changes by posting the new
						Privacy Policy on this page and updating the &quot;Last
						Updated&quot; date at the top. For material changes, we
						will provide a prominent notification inside the app
						before the changes take effect.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>
						9. Contact Us
					</h2>
					<p>
						If you have any questions, concerns, or data requests
						regarding this Privacy Policy, please reach out to us
						at:
					</p>
					<p className='mt-4'>
						<strong className='text-charcoal'>Email:</strong>{' '}
						<a
							href='mailto:hello@matchaservice.com'
							className='text-matcha hover:text-matcha-dark'
						>
							hello@matchaservice.com
						</a>
					</p>
				</div>
			</Container>
		</section>
	);
};

export const Route = createFileRoute('/privacy')({ component: Privacy });
