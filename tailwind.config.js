const colors = require("tailwindcss/colors");
module.exports = {
	mode: 'jit',
	purge: {
		content: ['./src/**/*.{html,svg,js,css,pcss}'],
		options: {
			keyframes: true,
		}
	},
	important: true,
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('daisyui'),
	],
	corePlugins: {
		backgroundColor: true,
	},
	daisyui: {
		styled: true,
		themes: true,
		base: true,
		utils: true,
		logs: true,
		rtl: true,
	}
}

