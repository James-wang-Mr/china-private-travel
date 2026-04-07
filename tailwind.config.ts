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
        forest: {
          DEFAULT: '#2D5016',
          50: '#E8F0E4',
          100: '#D1E1C9',
          200: '#A3C393',
          300: '#75A55D',
          400: '#4A7C59',
          500: '#2D5016',
          600: '#264012',
          700: '#1F300D',
          800: '#182009',
          900: '#111005',
        },
        sage: {
          DEFAULT: '#7BA05B',
          light: '#9BBF7D',
          dark: '#5C8344',
        },
        moss: '#4A7C59',
        sunflower: {
          DEFAULT: '#F4C430',
          light: '#F7D35C',
          dark: '#D4A82A',
        },
        honey: '#E5A835',
        cream: '#FDF8E8',
        bark: '#5D4E37',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        chinese: ['Noto Sans SC', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'leaf-pattern': "url('/patterns/leaves.svg')",
      },
    },
  },
  plugins: [],
}
export default config
