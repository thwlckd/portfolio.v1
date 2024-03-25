import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
        'spin-2': 'spin-2 5s ease-in-out infinite',
        'text-gradient': 'text-gradient 8s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
        'spin-2': {
          '0%, 80%': { transform: 'rotate(-1080deg)' },
        },
        'text-gradient': {
          '0%': {
            'text-shadow':
              '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black',
          },
          '20%': {
            'text-shadow':
              '-1px -1px 0 red, 1px -1px 0 red, -1px 1px 0 red, 1px 1px 0 red',
          },
          '40%': {
            'text-shadow':
              '-1px -1px 0 orange, 1px -1px 0 orange, -1px 1px 0 orange, 1px 1px 0 orange',
          },
          '60%': {
            'text-shadow':
              '-1px -1px 0 green, 1px -1px 0 green, -1px 1px 0 green, 1px 1px 0 green',
          },
          '80%': {
            'text-shadow':
              '-1px -1px 0 blue, 1px -1px 0 blue, -1px 1px 0 blue, 1px 1px 0 blue',
          },
          '100%': {
            'text-shadow':
              '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black',
          },
        },
      },
    },
  },
  safelist: [
    'text-[30px]',
    'sm:text-[40px]',
    'lg:text-[50px]',
    'bg-black',
    'bg-orange-600',
    'bg-pink-600',
    'bg-slate-800',
    'after:content-["1"]',
    'after:content-["2"]',
    'after:content-["3"]',
    'after:content-["4"]',
    'after:content-["5"]',
    'after:content-["6"]',
    'after:content-["7"]',
    'after:content-["8"]',
    'after:content-["9"]',
    'after:content-["10"]',
    {
      pattern:
        /bg-(orange|sky|yellow|blue|cyan|pink|fuchsia|teal|violet|red|lime|gray|green|amber|slate)-500/,
    },
  ],
  plugins: [],
};

export default config;
