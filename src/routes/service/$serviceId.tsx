import React from 'react';
import { createFileRoute, Link, useParams } from '@tanstack/react-router';
import { Avatar, Button, Result } from 'antd';
import { CalendarPlus, MapPin, Sparkles } from 'lucide-react';
import { Container } from '#/components';
import { appLinkProps } from '#/config/appLink';

const API_BASE = 'https://api.matchaservice.com';
const SCHEME = 'com.matchaservice.work';
const WEB_BASE = 'https://matchaservice.com';

interface Variant {
	id: string;
	name: string;
	description: string | null;
	price: number;
	duration: number | null;
}

interface ServicePayload {
	id: string;
	title: string;
	description: string | null;
	price: number;
	category: string | null;
	service_type: string;
	is_virtual: boolean;
	location: string | null;
	face_to_face_location: string | null;
	photos: string[] | null;
	provider: {
		id: string;
		fullName: string;
		username: string;
		avatarUrl: string | null;
	};
	variants: Variant[];
}

const ServiceLanding = () => {
	const { serviceId } = useParams({ from: '/service/$serviceId' });
	const search = Route.useSearch() as {
		variantId?: string;
		utm_source?: string;
		utm_medium?: string;
		utm_campaign?: string;
	};

	return <ServiceContent serviceId={serviceId} search={search} />;
};

const ServiceContent = ({
	serviceId,
	search
}: {
	serviceId: string;
	search: {
		variantId?: string;
		utm_source?: string;
		utm_medium?: string;
		utm_campaign?: string;
	};
}) => {
	const service = Route.useLoaderData();
	const selectedVariantId = search.variantId?.trim() || null;
	const selectedVariant =
		selectedVariantId && service?.variants
			? (service.variants.find((v) => v.id === selectedVariantId) ?? null)
			: null;
	const price =
		selectedVariant?.price ??
		service?.variants?.[0]?.price ??
		service?.price;
	const utmQuery = [
		search.utm_source
			? `utm_source=${encodeURIComponent(search.utm_source)}`
			: null,
		search.utm_medium
			? `utm_medium=${encodeURIComponent(search.utm_medium)}`
			: null,
		search.utm_campaign
			? `utm_campaign=${encodeURIComponent(search.utm_campaign)}`
			: null
	]
		.filter(Boolean)
		.join('&');
	const variantQuery = selectedVariantId
		? `variantId=${encodeURIComponent(selectedVariantId)}`
		: null;
	const combinedQuery = [variantQuery, utmQuery].filter(Boolean).join('&');
	const querySuffix = combinedQuery ? `?${combinedQuery}` : '';
	const appPath = `service/${serviceId}${querySuffix}`;
	const openService = appLinkProps(appPath);

	const heroImage = service?.photos?.[0] ?? service?.provider?.avatarUrl;

	return (
		<section className='relative py-16 md:py-24 gradient-bg-hero min-h-[85vh] flex items-center overflow-hidden'>
			<div className='glow-sage-blob w-[480px] h-[480px] top-1/4 left-1/2 -translate-x-1/2' />

			<Container maxWidth={960}>
				<div className='relative z-10'>
					{/* Badge */}
					<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-matcha-light/80 border border-matcha/20 text-matcha text-xs font-semibold mb-6 shadow-xs'>
						<Sparkles size={16} />
						<span>Find &amp; book trusted services on Matcha</span>
					</div>

					<div className='glass-card rounded-4xl border border-border/80 shadow-2xl overflow-hidden bg-white/95'>
						{/* Hero */}
						<div className='grid md:grid-cols-2'>
							<div className='relative h-64 md:h-full min-h-64'>
								{heroImage ? (
									<img
										src={heroImage}
										alt={service?.title}
										className='absolute inset-0 w-full h-full object-cover'
									/>
								) : (
									<div className='absolute inset-0 flex items-center justify-center bg-matcha-light/40'>
										<span className='text-matcha text-6xl font-extrabold'>
											{service?.title?.[0]?.toUpperCase()}
										</span>
									</div>
								)}
							</div>

							<div className='p-8 md:p-10 flex flex-col gap-5'>
								<div>
									{service?.category ? (
										<span className='inline-flex items-center px-3 py-1 rounded-full bg-matcha-light/70 text-matcha text-xs font-semibold mb-3'>
											{service.category}
										</span>
									) : null}
									<h1 className='text-3xl md:text-4xl font-extrabold text-charcoal leading-tight mb-2'>
										{service?.title ?? 'Service'}
									</h1>
									<p className='text-warm-gray text-sm leading-relaxed'>
										from{' '}
										<span className='text-charcoal font-bold text-lg'>
											₱
											{Number(
												price ?? 0
											).toLocaleString()}
										</span>
									</p>
								</div>

								{service?.location ? (
									<div className='flex items-center gap-2 text-warm-gray text-sm'>
										<MapPin
											size={16}
											className='text-matcha'
										/>
										<span>{service.location}</span>
									</div>
								) : null}

								<div className='flex items-center gap-3 mt-2'>
									<Avatar
										size={48}
										src={
											service?.provider.avatarUrl ??
											undefined
										}
									>
										{service?.provider.fullName?.[0]}
									</Avatar>
									<div>
										<div className='font-bold text-charcoal'>
											{service?.provider.fullName}
										</div>
										<div className='text-xs text-warm-gray'>
											@{service?.provider.username}
										</div>
									</div>
								</div>

								<div className='mt-auto pt-6 flex flex-col gap-3'>
									<Button
										type='primary'
										size='large'
										{...openService}
										icon={
											<CalendarPlus
												className='mr-1'
												size={18}
											/>
										}
										className='!bg-matcha hover:!bg-matcha-dark !border-matcha !h-14 !rounded-2xl !text-base !font-bold !shadow-md hover:!scale-[1.02] transition-transform'
									>
										Book Now in the App
									</Button>
									<div className='flex gap-3'>
										<Button
											size='large'
											{...openService}
											className='!h-12 !rounded-2xl !font-semibold flex-1'
										>
											Open App
										</Button>
										<Link to='/download' className='flex-1'>
											<Button
												size='large'
												className='!h-12 !rounded-2xl !font-semibold w-full'
											>
												Get the App
											</Button>
										</Link>
									</div>
								</div>
							</div>
						</div>

						{service?.variants?.length ? (
							<div className='border-t border-border/60 p-8 md:p-10'>
								<h2 className='text-lg font-bold text-charcoal mb-4'>
									Choose a package
								</h2>
								<div className='grid sm:grid-cols-2 gap-3'>
									{service.variants.map((v) => {
										const isSelected =
											selectedVariantId === v.id;
										return (
											<div
												key={v.id}
												className={
													isSelected
														? 'border-2 border-matcha bg-matcha-light/30 rounded-2xl p-4 flex items-center justify-between shadow-sm'
														: 'border border-border rounded-2xl p-4 flex items-center justify-between'
												}
											>
												<div>
													<div className='font-bold text-charcoal flex items-center gap-2'>
														{v.name}
														{isSelected ? (
															<span className='inline-flex items-center px-2 py-0.5 rounded-full bg-matcha text-white text-[10px] font-bold uppercase tracking-wide'>
																Selected
															</span>
														) : null}
													</div>
													{v.duration ? (
														<div className='text-xs text-warm-gray mt-1'>
															{v.duration} min
														</div>
													) : null}
												</div>
												<div className='font-bold text-matcha'>
													₱
													{Number(
														v.price
													).toLocaleString()}
												</div>
											</div>
										);
									})}
								</div>
								{selectedVariant ? (
									<p className='text-xs text-warm-gray mt-3'>
										Link pre-selected “
										{selectedVariant.name}” — tap Book Now
										to open it in the app.
									</p>
								) : null}
							</div>
						) : null}

						{service.description ? (
							<div className='border-t border-border/60 p-8 md:p-10'>
								<h2 className='text-lg font-bold text-charcoal mb-2'>
									About this service
								</h2>
								<p className='text-warm-gray text-sm leading-relaxed'>
									{service.description}
								</p>
								<Link
									to='/user/$userId'
									params={{ userId: service.provider.id }}
								>
									<Button
										type='link'
										className='!px-0 !text-matcha mt-2'
									>
										View provider profile →
									</Button>
								</Link>
							</div>
						) : null}
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
					title='Service not found'
					subTitle='This service is no longer available or the link is invalid.'
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

export const Route = createFileRoute('/service/$serviceId')({
	validateSearch: (search: Record<string, unknown>) => ({
		variantId:
			typeof search.variantId === 'string'
				? search.variantId
				: typeof search.variant_id === 'string'
					? search.variant_id
					: undefined,
		utm_source:
			typeof search.utm_source === 'string'
				? search.utm_source
				: undefined,
		utm_medium:
			typeof search.utm_medium === 'string'
				? search.utm_medium
				: undefined,
		utm_campaign:
			typeof search.utm_campaign === 'string'
				? search.utm_campaign
				: undefined
	}),
	head: ({
		loaderData,
		params
	}: {
		loaderData?: ServicePayload;
		params: { serviceId: string };
	}) => {
		const title = loaderData?.title
			? `${loaderData.title} — Book on Matcha`
			: 'Book a Service on Matcha';
		const description =
			loaderData?.description?.slice(0, 160) ??
			'Find & book trusted services on Matcha — tap to open in the app.';
		const image =
			loaderData?.photos?.[0] ??
			loaderData?.provider?.avatarUrl ??
			`${WEB_BASE}/icon.png`;
		const url = `${WEB_BASE}/service/${params.serviceId}`;
		const appUrl = `${SCHEME}://service/${params.serviceId}`;
		return {
			meta: [
				{ title },
				{ name: 'description', content: description },
				{ property: 'og:title', content: title },
				{ property: 'og:description', content: description },
				{ property: 'og:image', content: image },
				{ property: 'og:url', content: url },
				{ property: 'og:type', content: 'website' },
				{ name: 'twitter:card', content: 'summary_large_image' },
				{ name: 'twitter:title', content: title },
				{ name: 'twitter:description', content: description },
				{ name: 'twitter:image', content: image },
				// App Links — enables FB/IG in-app browser to offer “Open in App”.
				// iOS Universal Link is via applinks:matchaservice.com, these are the fallback for scrapers.
				{ property: 'al:ios:url', content: appUrl },
				{ property: 'al:ios:app_store_id', content: '6791573435' },
				{ property: 'al:ios:app_name', content: 'Matcha' },
				{ property: 'al:android:url', content: appUrl },
				{ property: 'al:android:package', content: SCHEME },
				{ property: 'al:android:app_name', content: 'Matcha' },
				{ property: 'al:web:url', content: url }
			]
		};
	},
	loader: async ({ params }) => {
		const res = await fetch(`${API_BASE}/services/${params.serviceId}`);
		if (!res.ok) throw new Error('Service not found');
		return (await res.json()) as ServicePayload;
	},
	component: ServiceLanding,
	errorComponent: ErrorComponent
});
