import type { ThemeConfig } from 'antd';

export const matchaTheme: ThemeConfig = {
	token: {
		colorPrimary: '#004450',
		colorBgBase: '#FAF9F6',
		colorTextBase: '#2D2D2D',
		borderRadius: 8,
		fontFamily:
			'\'Geist Variable\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, sans-serif'
	},
	components: {
		Button: {
			controlHeight: 44,
			fontSize: 16,
			paddingContentHorizontal: 24
		},
		Card: {
			borderRadiusLG: 12
		}
	}
};
