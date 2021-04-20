import { rgba } from 'polished';

export const darkTheme = {
	title: 'dark',

	colors: {
		background: '#0D1117',
		boxBackground: '#21262D',
		text: '#fff',

		primary: {
			300: '#9F75FF',
			400: '#9164FA',
			500: '#8257E5',
			800: '#6F48C9'
		},

		green: { 500: '#04D361' },

		gray: {
			50: '#F7F8FA',
			100: '#E6E8EB',
			200: '#AFB2B1',
			500: '#808080',
			800: '#494D4B'
		},

		white: '#fff',
		black: '#000'
	},

	shadows: {
		default: `0 0 0.8rem ${rgba('#263238', 0.15)}`
	}
};