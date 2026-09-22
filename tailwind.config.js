/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#121212',
          hover: '#2b2b2b',
        },
        'on-primary': '#ffffff',
        accent: {
          DEFAULT: '#c08a3e',
          strong: '#9a6a26',
          soft: '#f5ead8',
        },
        sale: '#d22f27',
        background: '#f7f5f1',
        surface: {
          DEFAULT: '#ffffff',
          2: '#f0ece6',
          3: '#e8e3dc',
          sunken: '#f0ece6',
        },
        foreground: '#151515',
        muted: '#6e6962',
        subtle: '#9a948b',
        border: {
          DEFAULT: '#e7e2da',
          strong: '#d2cbc0',
        },
        line: {
          DEFAULT: '#e7e2da',
          strong: '#d2cbc0',
        },
        ink: {
          DEFAULT: '#121212',
          soft: '#2b2b2b',
          muted: '#6e6962',
        },
        kika: '#d22f27',
        gold: '#c08a3e',
        cold: {
          DEFAULT: '#2f7fb8',
          dark: '#1d5a86',
        },
        ok: {
          DEFAULT: '#1e7a4c',
          soft: '#e3f2ea',
        },
        warn: {
          DEFAULT: '#a8650a',
          soft: '#fbf0dc',
        },
        danger: '#c62828',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-montserrat)', 'Montserrat', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 8px rgba(0, 0, 0, 0.05)',
        lift: '0 12px 28px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
