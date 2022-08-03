/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
 module.exports = {
  important: true,
  // Active dark mode on class basis
  darkMode: "class",
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,md,mdx}', 
      './components/**/*.{js,ts,jsx,tsx,md,mdx}',
      './content/**/*.{js,ts,jsx,tsx,md,mdx}'
    ],
    // These options are passed through directly to PurgeCSS
  },
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        check: "url('/icons/check.svg')",
        landscape: "url('/images/landscape/2.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("nightwind")
  ],
  future: {
    purgeLayersByDefault: true,
  },
};

