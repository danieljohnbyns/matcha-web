import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { TanStackDevtools } from '@tanstack/react-devtools';
import { ConfigProvider } from 'antd';

import appCss from '../styles.css?url';
import { matchaTheme } from '#/config/theme';
import { Navbar, Footer } from '#/components';

const RootDocument = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang='en'>
			<head>
				<HeadContent />
			</head>
			<body>
				<ConfigProvider theme={matchaTheme}>
					<div className='min-h-screen flex flex-col bg-warm-white'>
						<Navbar />
						<main className='flex-1'>{children}</main>
						<Footer />
					</div>
				</ConfigProvider>
				<TanStackDevtools
					config={{
						position: 'bottom-right'
					}}
					plugins={[
						{
							name: 'Tanstack Router',
							render: <TanStackRouterDevtoolsPanel />
						}
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
};

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				title: 'Matcha — Trusted Services.'
			},
			{
				name: 'theme-color',
				content: '#004450'
			}
		],
		links: [
			{
				rel: 'stylesheet',
				href: appCss
			},
			{
				rel: 'icon',
				type: 'image/png',
				href: '/icon.png'
			},
			{
				rel: 'apple-touch-icon',
				href: '/icon.png'
			},
			{
				rel: 'manifest',
				href: '/manifest.json'
			}
		]
	}),
	shellComponent: RootDocument
});
