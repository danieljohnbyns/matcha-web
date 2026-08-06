import { createFileRoute } from '@tanstack/react-router';
import { Container } from '#/components';

const Terms = () => {
	return (
		<section className='py-24 bg-warm-white'>
			<Container maxWidth={800}>
				<div className='text-center mb-16'>
					<h1 className='text-4xl md:text-5xl font-bold text-charcoal'>
						Terms and Conditions
					</h1>
					<p className='text-warm-gray text-base mt-2'>
						Last Updated: June 15, 2026
					</p>
				</div>

				<div className='text-warm-gray text-base leading-relaxed space-y-6'>
					<p>
						Welcome to Matcha. Please read these Terms and
						Conditions (&quot;Terms&quot;) carefully before using
						the Matcha mobile application and website (the
						&quot;Service&quot;), operated by Matcha
						(&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
					</p>
					<p>
						By accessing or using the Service, you agree to be bound
						by these Terms. If you disagree with any part of the
						terms, you may not access the Service.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>
						1. Description of Service
					</h2>
					<p>
						Matcha provides a digital platform that connects
						independent service providers (&quot;Providers&quot;)
						with clients seeking those services
						(&quot;Clients&quot;).
					</p>
					<ul className='list-disc pl-6 space-y-2'>
						<li>
							<strong className='text-charcoal'>
								The Platform&rsquo;s Role:
							</strong>{' '}
							Matcha acts solely as a venue and technology
							provider. Matcha is not a party to any contractual
							agreements, negotiations, or transactions between
							Providers and Clients.
						</li>
						<li>
							<strong className='text-charcoal'>
								No Employment Relationship:
							</strong>{' '}
							Providers are independent contractors and are not
							employees, agents, or partners of Matcha. Matcha
							does not employ, endorse, or verify the credentials
							of any Provider unless explicitly stated.
						</li>
					</ul>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>
						2. Eligibility and User Accounts
					</h2>
					<p>
						To use Matcha, you must be at least 18 years old and
						capable of forming a legally binding contract.
					</p>
					<p>
						When you create an account, you must provide accurate,
						complete, and current information. Failure to do so
						constitutes a breach of the Terms, which may result in
						immediate termination of your account. You are entirely
						responsible for safeguarding your account password and
						for any activities or actions under your password.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>
						3. User Conduct and Acceptable Use
					</h2>
					<p>
						You agree to use the Service only for lawful purposes.
						You are strictly prohibited from:
					</p>
					<ul className='list-disc pl-6 space-y-2'>
						<li>
							Misrepresenting your identity, qualifications, or
							services.
						</li>
						<li>
							Harassing, abusing, or harming other users of the
							platform.
						</li>
						<li>
							Using the platform to bypass Matcha&rsquo;s payment
							or booking systems if a transaction originated on
							the platform.
						</li>
						<li>
							Scraping, hacking, or attempting to compromise the
							security and performance of the application.
						</li>
					</ul>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>
						4. Fees, Payments, and Cancellations
					</h2>
					<ul className='list-disc pl-6 space-y-2'>
						<li>
							<strong className='text-charcoal'>
								Platform Fees:
							</strong>{' '}
							Matcha may charge fees to Providers and/or Clients
							for facilitating bookings. Any applicable fees will
							be clearly disclosed prior to booking.
						</li>
						<li>
							<strong className='text-charcoal'>
								Payment Processing:
							</strong>{' '}
							Payment processing services on Matcha are provided
							by third-party payment gateways. By using these
							services, you agree to abide by their respective
							terms of service.
						</li>
						<li>
							<strong className='text-charcoal'>
								Disputes and Refunds:
							</strong>{' '}
							Because transactions are strictly between Clients
							and Providers, refunds and cancellations are
							governed by the individual Provider&rsquo;s
							cancellation policy, subject to Matcha&rsquo;s
							platform-wide dispute guidelines. Matcha reserves
							the right, but has no obligation, to mediate
							disputes.
						</li>
					</ul>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>
						5. Mobile App License (EULA)
					</h2>
					<p>
						Subject to your compliance with these Terms, Matcha
						grants you a limited, non-exclusive, non-transferable,
						revocable license to download, install, and use the
						Matcha mobile application on a compatible mobile device
						that you own or control, solely for your personal or
						authorized business use.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>
						6. Intellectual Property
					</h2>
					<p>
						The Service and its original content, features, and
						functionality (excluding content provided by users) are
						and will remain the exclusive property of Matcha and its
						licensors. Our trademarks, logos, and branding may not
						be used in connection with any product or service
						without our prior written consent.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>
						7. Limitation of Liability and Disclaimers
					</h2>
					<p className='font-semibold text-charcoal'>
						THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND
						&quot;AS AVAILABLE&quot; BASIS.
					</p>
					<p>
						To the maximum extent permitted by applicable law,
						Matcha explicitly disclaims all warranties, whether
						express or implied.
					</p>
					<ul className='list-disc pl-6 space-y-2'>
						<li>
							<strong className='text-charcoal'>
								User Interactions:
							</strong>{' '}
							Matcha is not liable for the conduct, quality,
							safety, legality, or reliability of any services
							rendered by Providers, or the behavior of Clients.
							Your interactions with other users are entirely at
							your own risk.
						</li>
						<li>
							<strong className='text-charcoal'>
								Damages Shield:
							</strong>{' '}
							In no event shall Matcha, its directors, employees,
							or partners be liable for any indirect, incidental,
							special, consequential, or punitive damages,
							including without limitation, loss of profits, data,
							use, goodwill, or other intangible losses resulting
							from your use of the Service.
						</li>
					</ul>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>
						8. Account Termination
					</h2>
					<p>
						We may terminate or suspend your account and bar access
						to the Service immediately, without prior notice or
						liability, under our sole discretion, for any reason
						whatsoever, including without limitation a breach of the
						Terms.
					</p>
					<p>
						If you wish to terminate your account, you may do so
						through the account settings within the app or by
						contacting our support team.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>
						9. Governing Law
					</h2>
					<p>
						These Terms shall be governed and construed in
						accordance with the laws of the jurisdiction in which
						Matcha is legally incorporated, without regard to its
						conflict of law provisions.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>
						10. Changes to Terms
					</h2>
					<p>
						We reserve the right, at our sole discretion, to modify
						or replace these Terms at any time. If a revision is
						material, we will provide at least 30 days&apos; notice
						prior to any new terms taking effect. By continuing to
						access or use our Service after those revisions become
						effective, you agree to be bound by the revised terms.
					</p>

					<h2 className='text-2xl font-bold text-charcoal mt-12 mb-4'>
						11. Contact Us
					</h2>
					<p>
						If you have any questions about these Terms, please
						contact us at:
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

export const Route = createFileRoute('/terms')({ component: Terms });
