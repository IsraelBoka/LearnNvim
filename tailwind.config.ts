import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
			keyframes:  {
				"fade-in-up" : {
					"from" : {opacity: "0", transform: "translateY(-10px)"},
					"to" : {opacity : "1", transform: "translateY(0px)"},
				},
				"fade-from-left" : {
					
					"from" : {opacity: "0", transform: "translateX(-10px)"},
					"to" : {
					opacity : "1",
					transform : "translateX(0px)"
					}
				},
				"fade-from-right" : {
					"from" : {
						opacity: "0",
						transform : "translateX(10px)"
					},
					"to" : {
						opacity: '1',
						transform: "translateX(0px)"
					}
				}
			},

		animation : {
			"fade" : "fade-in-up 1s ease-in-out",
			"fade-left" : "fade-from-left 1s ease-in-out",
			"fade-right" : "fade-from-right 1s ease-in-out"

		}
		},

  },
  plugins: [],
} satisfies Config;
