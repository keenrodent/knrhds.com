/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: [
			{
				knrhds: {
					"primary": "#C84113",          // Altgeld Orange (better contrast than Illini Orange)
					"primary-content": "#FFFFFF",   // White text on orange buttons
					"secondary": "#13294B",         // Illini Blue
					"secondary-content": "#FFFFFF", // White text on blue
					"accent": "#FF5F05",            // Illini Orange (for highlights/hover)
					"accent-content": "#FFFFFF",
					"neutral": "#13294B",           // Illini Blue for neutral elements
					"neutral-content": "#C8C6C7",  // Light gray text on dark
					"base-100": "#FFFFFF",          // White background
					"base-200": "#F5F5F4",          // Slight warm gray for sidebar/cards
					"base-300": "#E7E5E4",          // Borders, dividers
					"base-content": "#13294B",      // Illini Blue as default text (richer than black)
					"info": "#009FD4",              // Arches blue
					"success": "#006230",           // Prairie green
					"warning": "#FCB316",           // Harvest gold
					"error": "#5C0E41",             // Berry
				},
			},
		],
		darkTheme: "dark",
		logs: false,
	  }
}
