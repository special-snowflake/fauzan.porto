/** @type {import('tailwindcss').Config} */
// Design system: "monopo saigon" editorial monochrome (see ~/Downloads/Spoon Pagi/set 2/DESIGN.md)
// Tailwind v3 — tokens mirror the CSS custom properties declared in src/app/globals.css.
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        // ── DESIGN.md palette ──
        obsidian: '#000000',
        paper: '#ffffff',
        inkstone: '#181818',
        'felt-gray': '#6d6d6d',
        'slate-pill': '#636363',
        'ash-mist': '#9a9a9a',
        pewter: '#808080',

        // ── legacy keys, remapped to monochrome so no chromatic UI survives ──
        'soft-black': '#404040',
        'dark-navy': '#ffffff',
        'slate-dark': '#f7f7f7',
        primary: '#000000',
        'primary-light': '#181818',
        accent: '#6d6d6d',
        'accent-light': '#808080',
        success: '#181818',
        warning: '#6d6d6d'
      },
      fontFamily: {
        sans: ['var(--font-roobert)'],
        roobert: ['var(--font-roobert)'],
        raleway: ['var(--font-raleway)']
      },
      fontSize: {
        // DESIGN.md type scale (size / line-height)
        caption: ['12px', { lineHeight: '1.19' }],
        'body-sm': ['16px', { lineHeight: '1.15' }],
        body: ['18px', { lineHeight: '1.21' }],
        subheading: ['39px', { lineHeight: '1.19' }],
        'subheading-lg': ['45px', { lineHeight: '1.15' }],
        'heading-sm': ['54px', { lineHeight: '1.39' }],
        heading: ['78px', { lineHeight: '1.1' }],
        'heading-lg': ['94px', { lineHeight: '0.76' }],
        display: ['225px', { lineHeight: '1.25' }]
      },
      maxWidth: {
        page: '1078px'
      },
      borderRadius: {
        tags: '75px',
        buttons: '75px',
        cards: '0px',
        images: '0px',
        inputs: '0px',
        pill: '75px'
      },
      backgroundImage: {
        'iridescent-fade':
          'linear-gradient(90deg, rgb(160, 224, 171), rgb(255, 172, 46) 50%, rgb(165, 45, 37))'
      },
      transitionTimingFunction: {
        glide: 'cubic-bezier(0.19, 1, 0.22, 1)'
      },
      transitionDuration: {
        glide: '1250ms',
        'glide-fast': '800ms'
      },
      animation: {
        'spin-slow': 'spinSlow 24s linear infinite',
        drift: 'drift 26s ease-in-out infinite alternate'
      },
      keyframes: {
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        },
        drift: {
          '0%': { transform: 'translate3d(-4%, -3%, 0) scale(1.05)' },
          '50%': { transform: 'translate3d(3%, 4%, 0) scale(1.12)' },
          '100%': { transform: 'translate3d(5%, -2%, 0) scale(1.08)' }
        }
      }
    }
  },
  plugins: []
};
