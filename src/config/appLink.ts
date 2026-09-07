import type { MouseEventHandler } from 'react';

/**
 * Links from this website into the installed Matcha app.
 *
 * A Universal Link / App Link cannot do this job from *these* pages, for two
 * independent reasons:
 *
 * 1. Neither platform hands a link to the app when the link points at the
 *    domain the page is already on. iOS documents this explicitly, and Chrome
 *    keeps same-origin navigations in the browser. `Open Profile in App` sits
 *    on `https://matchaservice.com/user/<id>` and used to point at that very
 *    URL, so tapping it could only ever reload the page it was on.
 * 2. `https://matchaservice.com/.well-known/*` was previously answered by the
 *    ingress in front of the Swiftwave container rather than by this server.
 *    Since the move to Vercel the files are reachable (verified 2026-09-07),
 *    but (1) is a permanent platform rule and keeps the scheme necessary for
 *    any button that lives on `matchaservice.com` itself.
 *
 * The app's own URL scheme has neither problem: it needs no association file
 * and no same-domain exception. It stays the mechanism these buttons use even
 * though Universal Links now verify, because a QR scanned from Messages/Camera
 * is the only path Universal Links can serve — not a button on the same
 * origin.
 *
 * See `docs/DEEP_LINKING.md` in the matcha-fe repo for the whole chain.
 */

/** `expo.scheme` in matcha-fe's `app.json`. */
export const APP_SCHEME = 'com.matchaservice.work';

/** `expo.android.package` in matcha-fe's `app.json`. */
export const ANDROID_PACKAGE = 'com.matchaservice.work';

const DOWNLOAD_URL = 'https://matchaservice.com/download';

/** In-app paths are written without a leading slash by the URL builders. */
const normalise = (path: string): string => path.replace(/^\/+/, '');

/**
 * `com.matchaservice.work://user/<id>` (or `service/<id>?variantId=&utm_*`),
 * which Expo Router resolves to the `/user/[id]` / `/service/[id]` screen.
 * Query string, if present, is preserved — it is parsed by the app's
 * `extractVariantId` / `extractUtmSource` helpers.
 */
export const appSchemeUrl = (path: string): string =>
	`${APP_SCHEME}://${normalise(path)}`;

/**
 * The Android form of the same link.
 *
 * Chrome for Android does not reliably follow a bare custom scheme — inside
 * the in-app browsers most of this traffic arrives through it fails with
 * `ERR_UNKNOWN_URL_SCHEME` — while `intent://` is the documented mechanism and
 * is understood by Chrome and by the common WebView browsers. It also carries
 * its own not-installed fallback, so a tap from a device without the app lands
 * on the download page instead of an error.
 */
export const androidIntentUrl = (path: string): string =>
	`intent://${normalise(path)}#Intent;scheme=${APP_SCHEME};package=${ANDROID_PACKAGE};S.browser_fallback_url=${encodeURIComponent(
		DOWNLOAD_URL
	)};end`;

const isAndroid = (): boolean =>
	typeof navigator !== 'undefined' && /android/i.test(navigator.userAgent);

/**
 * Send the current tab to the app.
 *
 * There is deliberately no "if nothing happened, go to the store" timer. That
 * heuristic misfires whenever the app *did* open — the page is still there
 * when the user comes back — and every page that calls this already shows a
 * `Get the App` button next to the one that was tapped, so a failed launch
 * leaves the visitor exactly where they can act.
 */
export const openInApp = (path: string): void => {
	if (typeof window === 'undefined') return;
	window.location.href = isAndroid()
		? androidIntentUrl(path)
		: appSchemeUrl(path);
};

/**
 * Props for a button or anchor that opens `path` in the app.
 *
 * The `href` is the plain scheme URL so the markup is a real link before
 * hydration and without JavaScript; the handler upgrades Android to
 * `intent://`. The platform is read in the handler rather than at render, so
 * server and client render the same HTML.
 */
export const appLinkProps = (
	path: string
): {
	href: string;
	onClick: MouseEventHandler<HTMLElement>;
} => ({
	href: appSchemeUrl(path),
	onClick: (event) => {
		event.preventDefault();
		openInApp(path);
	}
});
