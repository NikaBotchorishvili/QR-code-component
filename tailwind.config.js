/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		colors: {
			white: "hsl(0, 0%, 100%)",
			lightGray: "hsl(212, 45%, 89%)",
			grayishBlue: "hsl(220, 15%, 55%)",
			darkBlue: "hsl(218, 44%, 22%)",
		},
		fontFamily: {
			outfit: "'Outfit', sans-serif",
		},
		extend: {},
	},
	plugins: [],
};
