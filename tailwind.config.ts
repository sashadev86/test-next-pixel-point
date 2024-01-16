import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        "container": "94.875rem",
      },
      padding: {
        "safety": "0 0.9375rem"
      }
    },
    container: {
      center: true,
    },
    colors: {
      "black": "#0E0A0F",
      "grey-94": "#F0EEF1",
      "grey-98": "#FAF9FA",
      "primary": "#9966FF",
    },
    fontSize: {
      "text-15": [
        "0.9375rem",
        {
          fontWeight: "500",
          lineHeight: "2rem",
          letterSpacing: "0.0238rem",
        },
      ],
      "text-h1": [
        "4.75rem",
        {
          fontWeight: "400",
          lineHeight: "112.5%",
          letterSpacing: "-0.095rem",
        },
      ],
    },
  },
  plugins: [],
};
export default config
