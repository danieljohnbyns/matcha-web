import { createFileRoute, useParams } from '@tanstack/react-router';
import {
	ServiceLandingError,
	ServiceLandingView
} from '#/components/ServiceLandingView';
import {
	buildPrettyServicePath,
	buildServiceHead,
	fetchPublicServiceById,
	validateServiceSearch,
	type ServicePayload
} from '#/lib/publicService';

const ServiceLanding = () => {
	const { serviceId } = useParams({ from: '/service/$serviceId' });
	const search = Route.useSearch();
	const service = Route.useLoaderData();

	return (
		<ServiceLandingView
			service={service}
			search={{
				...search,
				// UUID route ignores a bare `variant` slug unless we pass it —
				// resolveSelectedVariant handles both.
				variantId: search.variantId
			}}
		/>
	);
};

export const Route = createFileRoute('/service/$serviceId')({
	validateSearch: validateServiceSearch,
	head: ({
		loaderData,
		params
	}: {
		loaderData?: ServicePayload;
		params: { serviceId: string };
	}) => {
		const pretty = loaderData
			? buildPrettyServicePath(loaderData)
			: `/service/${params.serviceId}`;
		return buildServiceHead(
			loaderData,
			pretty,
			loaderData?.id ?? params.serviceId
		);
	},
	loader: async ({ params }) => fetchPublicServiceById(params.serviceId),
	component: ServiceLanding,
	errorComponent: ServiceLandingError
});
