import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper:   '#F2EDE2',
        paper2:  '#E8E1D2',
        paper3:  '#FBF8F1',
        ink:     '#1A1A1A',
        ink2:    '#0D0D0D',
        ink3:    '#3A3733',
        muted:   '#7A736B',
        muted2:  '#9C948A',
        rule:    '#D3CCBE',
        // Forest green brand palette
        clay:    '#1b4332',
        clayd:   '#143728',
        moss:    '#2d6a4f',
        // Light green for dark sections
        claylt:  '#52b788',
      },
      fontFamily: {
        sans:  ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      fontSize: {
        '11': ['11px', { lineHeight: '1.5', letterSpacing: '0.22em' }],
        '12': ['12px', { lineHeight: '1.5' }],
        '13': ['13px', { lineHeight: '1.55' }],
        '14': ['14px', { lineHeight: '1.6' }],
        '15': ['15px', { lineHeight: '1.55' }],
        '16': ['16px', { lineHeight: '1.65' }],
        '17': ['17px', { lineHeight: '1.65' }],
      },
      borderRadius: {
        DEFAULT: '0px',
        sm: '4px',
        md: '8px',
        lg: '14px',
        full: '9999px',
      },
      maxWidth: { site: '1240px' },
      spacing: { '18': '72px', '22': '88px', '26': '104px' },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-8px)' },
        },
        bobSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-5px)' },
        },
        pulse2: {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0.6' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        countUp: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        blobDrift: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '33%':       { transform: 'scale(1.04) rotate(1.5deg)' },
          '66%':       { transform: 'scale(0.97) rotate(-1deg)' },
        },
      },
      animation: {
        'fade-up':    'fadeUp 0.6s cubic-bezier(.22,.7,.2,1) forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        'bob':        'bob 4s ease-in-out infinite',
        'bob-slow':   'bobSlow 5.5s ease-in-out infinite',
        'bob-delay':  'bobSlow 6.5s ease-in-out 1s infinite',
        'pulse2':     'pulse2 2.5s ease-in-out infinite',
        'blob-drift': 'blobDrift 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
