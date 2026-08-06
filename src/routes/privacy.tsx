import { createFileRoute } from '@tanstack/react-router';
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
						Last Updated: June 15, 2026
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
							Name, email address, phone number, and password are
							created when you register.
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
					</ul>

					<h3 className='text-lg font-semibold text-charcoal mt-8 mb-3'>
						B. Information Collected Automatically
					</h3>
					<ul className='list-disc pl-6 space-y-2'>
						<li>
							<strong className='text-charcoal'>
								Device and Usage Data:
							</strong>{' '}
							IP address, device type, operating system version,
							unique device identifiers, mobile network
							information, and app crash logs.
						</li>
						<li>
							<strong className='text-charcoal'>
								Location Data:
							</strong>{' '}
							With your explicit permission, we may collect
							precise or approximate geolocation data via your
							mobile device to show nearby service providers or
							clients. You can enable or disable location services
							in your device settings at any time.
						</li>
					</ul>

					<h3 className='text-lg font-semibold text-charcoal mt-8 mb-3'>
						C. Payment Processing and Financial Data
					</h3>
					<p>
						Matcha does not directly collect, process, or store your
						financial or payment details (such as credit card
						numbers, bank account details, or mobile wallet
						credentials). Payments on the platform are facilitated
						by the Providers, and are typically handled via the
						following methods:
					</p>
					<ul className='list-disc pl-6 space-y-2'>
						<li>
							<strong className='text-charcoal'>
								Digital and Card Payments:
							</strong>{' '}
							Credit card, debit card, and local mobile wallet
							transactions (such as GCash) are processed entirely
							by secure, independent, third-party payment
							gateways. These processors handle your data in
							accordance with their own privacy policies and
							PCI-DSS compliance standards. Matcha only receives
							non-sensitive transaction confirmations (such as
							reference IDs, status, and transaction amounts) to
							verify bookings.
						</li>
						<li>
							<strong className='text-charcoal'>
								Cash Payments:
							</strong>{' '}
							For transactions settled directly in cash between
							Clients and Providers, no financial data is
							transmitted or captured by the Service.
						</li>
					</ul>

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
							Process transactions, manage bookings, and send
							automated confirmations.
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
							business profile is visible to all users. When a
							booking is confirmed, limited contact details (like
							a phone number or name) are shared between the
							client and provider to facilitate the service.
						</li>
						<li>
							<strong className='text-charcoal'>
								Service Providers/SDKs:
							</strong>{' '}
							We share data with trusted third-party vendors who
							perform services for us, such as analytics tools
							(e.g., Google Analytics for Firebase), database
							hosting, and payment gateways. These parties are
							contractually obligated to protect your data.
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
							You can withdraw consent for location tracking or
							push notifications at any time via your mobile
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
							Upon receiving a deletion request, we permanently
							erase or anonymize your personal data from our
							active databases within 30 days, except where
							retention is legally mandated (such as tax or
							financial transaction history).
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
