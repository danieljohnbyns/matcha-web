import React from 'react';
import { createFileRoute, Link, useParams } from '@tanstack/react-router';
import { Avatar, Button, Result } from 'antd';
import { BadgeCheck, Sparkles } from 'lucide-react';
import { Container } from '#/components';
import { appLinkProps } from '#/config/appLink';

const API_BASE = 'https://api.matchaservice.com';
const WEB_BASE = 'https://matchaservice.com';

interface ProviderPayload {
	id: string;
	fullName: string;
	username: string;
	avatarUrl: string | null;
	activeServices: number;
}

const ProviderLanding = () => {
	const { userId } = useParams({ from: '/user/$userId' });
	return <ProviderContent userId={userId} />;
};

const ProviderContent = ({ userId }: { userId: string }) => {
	const provider = Route.useLoaderData();

	return (
		<section className='relative py-16 md:py-24 gradient-bg-hero min-h-[85vh] flex items-center overflow-hidden'>
			<div className='glow-sage-blob w-[480px] h-[480px] top-1/4 left-1/2 -translate-x-1/2' />

			<Container maxWidth={760}>
				<div className='relative z-10'>
					<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-matcha-light/80 border border-matcha/20 text-matcha text-xs font-semibold mb-6 shadow-xs'>
						<Sparkles size={16} />
						<span>Trusted services provider on Matcha</span>
					</div>

					<div className='glass-card rounded-4xl border border-border/80 shadow-2xl overflow-hidden bg-white/95 p-8 md:p-12 text-center'>
						<Avatar
							size={96}
							src={provider.avatarUrl ?? undefined}
							className='mx-auto mb-5 !bg-matcha'
						>
							{provider.fullName?.[0]}
						</Avatar>
						<div className='flex items-center justify-center gap-2'>
							<h1 className='text-3xl md:text-4xl font-extrabold text-charcoal'>
								{provider.fullName}
							</h1>
							<BadgeCheck size={22} className='text-matcha' />
						</div>
						<p className='text-warm-gray text-sm mt-1'>
							@{provider.username}
						</p>

						<div className='mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-matcha-light/60 text-matcha text-sm font-semibold'>
							{provider.activeServices}{' '}
							{provider.activeServices === 1
								? 'service'
								: 'services'}{' '}
							available
						</div>

						<div className='mt-10 flex flex-col sm:flex-row gap-3 justify-center'>
							<Button
								type='primary'
								size='large'
								{...appLinkProps(`user/${userId}`)}
								className='!bg-matcha hover:!bg-matcha-dark !border-matcha !h-14 !px-8 !rounded-2xl !text-base !font-bold !shadow-md hover:!scale-[1.02] transition-transform'
							>
								Open Profile in App
							</Button>
							<Link to='/download'>
								<Button
									size='large'
									className='!h-14 !px-8 !rounded-2xl !font-semibold'
								>
									Get the App
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

const ErrorComponent = () => {
	return (
		<section className='py-24 bg-warm-white min-h-[80vh] flex items-center'>
			<Container maxWidth={600}>
				<Result
					status='404'
					title='Profile not found'
					subTitle='This provider is no longer available or the link is invalid.'
					extra={[
						<Link to='/download' key='download'>
							<Button type='primary'>Get the App</Button>
						</Link>
					]}
				/>
			</Container>
		</section>
	);
};

export const Route = createFileRoute('/user/$userId')({
	head: ({ loaderData, params }: { loaderData?: ProviderPayload; params: { userId: string } }) => {
		const title = loaderData?.fullName
			? `${loaderData.fullName} (@${loaderData.username}) — Matcha`
			: 'Provider Profile on Matcha';
		const description = loaderData
			? `${loaderData.fullName} offers ${loaderData.activeServices} service${loaderData.activeServices === 1 ? '' : 's'} on Matcha.`
			: 'Trusted services provider on Matcha.';
		const image = loaderData?.avatarUrl ?? `${WEB_BASE}/icon.png`;
		const url = `${WEB_BASE}/user/${params.userId}`;
		return {
			meta: [
				{ title },
				{ name: 'description', content: description },
				{ property: 'og:title', content: title },
				{ property: 'og:description', content: description },
				{ property: 'og:image', content: image },
				{ property: 'og:url', content: url },
				{ property: 'og:type', content: 'profile' },
				{ name: 'twitter:card', content: 'summary' },
				{ name: 'twitter:title', content: title },
				{ name: 'twitter:description', content: description },
				{ name: 'twitter:image', content: image }
			]
		};
	},
	loader: async ({ params }) => {
		const res = await fetch(`${API_BASE}/account/${params.userId}`);
		if (!res.ok) throw new Error('Provider not found');
		return (await res.json()) as ProviderPayload;
	},
	component: ProviderLanding,
	errorComponent: ErrorComponent
});
