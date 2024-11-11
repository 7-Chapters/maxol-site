/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  container: {
		center: true,
		padding: "15px",
	  },
	  screens: {
		sm: "640px",
		md: "768px",
		lg: "960px",
		xl: "1200px",
	  },
	  extend: {
		fontFamily: {
		  primary: "var(--font-montserrat)",
		},
		colors: {
		  primary: '#e6ffd9', 
		  customGreen: '#3E8914',
		  customBlue: '#1575b2',
		  customYellow: '#F4D9B6',
		  customDarkBlue:'#134611',
		  accent: {
			DEFAULT: "134611",
			hover: "#96E072",
		  },
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  