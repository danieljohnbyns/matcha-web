const API_BASE = 'https://api.matchaservice.com';
export const SCHEME = 'com.matchaservice.work';
export const WEB_BASE = 'https://matchaservice.com';

export interface Variant {
	id: string;
	slug?: string;
	name: string;
	description: string | null;
	price: number | null;
	duration: number | null;
}

export interface ServicePayload {
	id: string;
	slug?: string;
	title: string;
	description: string | null;
	price: number | null;
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

export type ServiceSearch = {
	variantId?: string;
	variant?: string;
	utm_source?: string;
	utm_medium?: string;
	utm_campaign?: string;
};

export const validateServiceSearch = (
	search: Record<string, unknown>
): ServiceSearch => ({
	variantId:
		typeof search.variantId === 'string'
			? search.variantId
			: typeof search.variant_id === 'string'
				? search.variant_id
				: undefined,
	variant: typeof search.variant === 'string' ? search.variant : undefined,
	utm_source:
		typeof search.utm_source === 'string' ? search.utm_source : undefined,
	utm_medium:
		typeof search.utm_medium === 'string' ? search.utm_medium : undefined,
	utm_campaign:
		typeof search.utm_campaign === 'string'
			? search.utm_campaign
			: undefined
});

export const buildPrettyServicePath = (
	service: ServicePayload,
	variantSlug?: string | null
): string => {
	const slug = service.slug?.trim();
	const username = service.provider.username?.trim();
	if (!slug || !username || username === 'user')
		return `/service/${service.id}`;

	const base = `/service/${encodeURIComponent(slug)}/${encodeURIComponent(username)}`;
	if (!variantSlug?.trim()) return base;
	return `${base}?variant=${encodeURIComponent(variantSlug.trim())}`;
};

export const resolveSelectedVariant = (
	service: ServicePayload | undefined,
	search: ServiceSearch
): Variant | null => {
	if (!service?.variants?.length) return null;

	const byId = search.variantId?.trim();
	if (byId) {
		const match = service.variants.find((v) => v.id === byId);
		if (match) return match;
	};

	const bySlug = search.variant?.trim().toLowerCase();
	if (bySlug) {
		const match = service.variants.find(
			(v) => v.slug?.toLowerCase() === bySlug
		);
		if (match) return match;
	};

	return null;
};

export const fetchPublicServiceById = async (
	serviceId: string
): Promise<ServicePayload> => {
	const res = await fetch(`${API_BASE}/services/${serviceId}`);
	if (!res.ok) throw new Error('Service not found');
	return (await res.json()) as ServicePayload;
};

export const fetchPublicServiceBySlug = async (
	serviceSlug: string,
	username: string
): Promise<ServicePayload> => {
	const res = await fetch(
		`${API_BASE}/services/by-slug/${encodeURIComponent(serviceSlug)}/${encodeURIComponent(username)}`
	);
	if (!res.ok) throw new Error('Service not found');
	return (await res.json()) as ServicePayload;
};

export const buildServiceHead = (
	loaderData: ServicePayload | undefined,
	canonicalPath: string,
	serviceIdForApp: string
) => {
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
	const url = `${WEB_BASE}${canonicalPath}`;
	const appUrl = `${SCHEME}://service/${serviceIdForApp}`;
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
			{ property: 'al:ios:url', content: appUrl },
			{ property: 'al:ios:app_store_id', content: '6791573435' },
			{ property: 'al:ios:app_name', content: 'Matcha' },
			{ property: 'al:android:url', content: appUrl },
			{ property: 'al:android:package', content: SCHEME },
			{ property: 'al:android:app_name', content: 'Matcha' },
			{ property: 'al:web:url', content: url }
		],
		links: [{ rel: 'canonical', href: url }]
	};
};
