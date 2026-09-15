import React from 'react';
import { Link } from '@tanstack/react-router';
import { Avatar, Button, Result } from 'antd';
import { CalendarPlus, MapPin, Sparkles } from 'lucide-react';
import { Container } from '#/components';
import { appLinkProps } from '#/config/appLink';
import {
	resolveSelectedVariant,
	type ServicePayload,
	type ServiceSearch
} from '#/lib/publicService';

export const ServiceLandingView = ({
	service,
	search
}: {
	service: ServicePayload;
	search: ServiceSearch;
}) => {
	const selectedVariant = resolveSelectedVariant(service, search);
	const selectedVariantId = selectedVariant?.id ?? null;
	const price =
		selectedVariant?.price ?? service.variants?.[0]?.price ?? service.price;
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
	// App deep link always uses UUID + variantId so the native route stays
	// on service/[id] without needing slug resolution in the scheme.
	const variantQuery = selectedVariantId
		? `variantId=${encodeURIComponent(selectedVariantId)}`
		: null;
	const combinedQuery = [variantQuery, utmQuery].filter(Boolean).join('&');
	const querySuffix = combinedQuery ? `?${combinedQuery}` : '';
	const appPath = `service/${service.id}${querySuffix}`;
	const openService = appLinkProps(appPath);

	const heroImage = service.photos?.[0] ?? service.provider?.avatarUrl;

	return (
		<section className='relative py-16 md:py-24 gradient-bg-hero min-h-[85vh] flex items-center overflow-hidden'>
			<div className='glow-sage-blob w-[480px] h-[480px] top-1/4 left-1/2 -translate-x-1/2' />

			<Container maxWidth={960}>
				<div className='relative z-10'>
					<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-matcha-light/80 border border-matcha/20 text-matcha text-xs font-semibold mb-6 shadow-xs'>
						<Sparkles size={16} />
						<span>Find &amp; book trusted services on Matcha</span>
					</div>

					<div className='glass-card rounded-4xl border border-border/80 shadow-2xl overflow-hidden bg-white/95'>
						<div className='grid md:grid-cols-2'>
							<div className='relative h-64 md:h-full min-h-64'>
								{heroImage ? (
									<img
										src={heroImage}
										alt={service.title}
										className='absolute inset-0 w-full h-full object-cover'
									/>
								) : (
									<div className='absolute inset-0 flex items-center justify-center bg-matcha-light/40'>
										<span className='text-matcha text-6xl font-extrabold'>
											{service.title?.[0]?.toUpperCase()}
										</span>
									</div>
								)}
							</div>

							<div className='p-8 md:p-10 flex flex-col gap-5'>
								<div>
									{service.category ? (
										<span className='inline-flex items-center px-3 py-1 rounded-full bg-matcha-light/70 text-matcha text-xs font-semibold mb-3'>
											{service.category}
										</span>
									) : null}
									<h1 className='text-3xl md:text-4xl font-extrabold text-charcoal leading-tight mb-2'>
										{service.title ?? 'Service'}
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

								{service.location ? (
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
											service.provider.avatarUrl ??
											undefined
										}
									>
										{service.provider.fullName?.[0]}
									</Avatar>
									<div>
										<div className='font-bold text-charcoal'>
											{service.provider.fullName}
										</div>
										<div className='text-xs text-warm-gray'>
											@{service.provider.username}
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

						{service.variants?.length ? (
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
														v.price ?? 0
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

export const ServiceLandingError = () => {
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
