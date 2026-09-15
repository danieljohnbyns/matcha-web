import { createFileRoute, useParams } from '@tanstack/react-router';
import {
	ServiceLandingError,
	ServiceLandingView
} from '#/components/ServiceLandingView';
import {
	buildPrettyServicePath,
	buildServiceHead,
	fetchPublicServiceBySlug,
	validateServiceSearch,
	type ServicePayload
} from '#/lib/publicService';

const ServiceLandingBySlug = () => {
	const { serviceSlug, username } = useParams({
		from: '/service/$serviceSlug/$username'
	});
	const search = Route.useSearch();
	const service = Route.useLoaderData();

	void serviceSlug;
	void username;

	return <ServiceLandingView service={service} search={search} />;
};

export const Route = createFileRoute('/service/$serviceSlug/$username')({
	validateSearch: validateServiceSearch,
	head: ({
		loaderData,
		params
	}: {
		loaderData?: ServicePayload;
		params: { serviceSlug: string; username: string };
	}) => {
		const pretty = loaderData
			? buildPrettyServicePath(loaderData)
			: `/service/${params.serviceSlug}/${params.username}`;
		return buildServiceHead(
			loaderData,
			pretty,
			loaderData?.id ?? params.serviceSlug
		);
	},
	loader: async ({ params }) =>
		fetchPublicServiceBySlug(params.serviceSlug, params.username),
	component: ServiceLandingBySlug,
	errorComponent: ServiceLandingError
});
