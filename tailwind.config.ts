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
        "roboto": ["Roboto", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"],
      },
      maxWidth: {
        container: "94.875rem",
      },
      padding: {
        safety: "0 0.9375rem",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(122deg, #FFF -2.64%, rgba(255, 255, 255, 0.50) 60.84%)",
      },
    },
    container: {
      center: true,
    },
    colors: {
      "black": "#0E0A0F",
      "grey-94": "#F0EEF1",
      "grey-98": "#FAF9FA",
      "primary": "#9966FF",
      "london-hue": "#B394B2",
      "white": "#ffffff",
      "error": "#F04242",
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
