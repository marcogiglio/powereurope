/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#1a1a1a',
          950: '#0d0d0d',
        },
        paper: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
        },
        accent: {
          500: '#b45309',
          600: '#92400e',
        },
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        // Clean sans-serif for headings and UI
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        // High-quality serif for body text - better for long-form reading
        serif: ['"Source Serif 4"', 'Georgia', 'Times New Roman', 'serif'],
        // Monospace for data
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      fontSize: {
        // Fluid type scale using clamp() for smooth responsive sizing
        // Format: [size, { lineHeight, letterSpacing, fontWeight }]

        // Body sizes
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.7' }],
        'lg': ['1.125rem', { lineHeight: '1.7' }],

        // Fluid body for articles - scales from 18px to 21px
        'article': ['clamp(1.125rem, 1rem + 0.5vw, 1.3125rem)', { lineHeight: '1.75' }],

        // Display sizes - fluid scaling
        'display-sm': ['clamp(1.25rem, 1rem + 1vw, 1.5rem)', {
          lineHeight: '1.3',
          letterSpacing: '-0.01em',
          fontWeight: '600'
        }],
        'display-md': ['clamp(1.5rem, 1.25rem + 1.5vw, 2rem)', {
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
          fontWeight: '700'
        }],
        'display-lg': ['clamp(2rem, 1.5rem + 2vw, 2.75rem)', {
          lineHeight: '1.15',
          letterSpacing: '-0.02em',
          fontWeight: '700'
        }],
        'display-xl': ['clamp(2.5rem, 2rem + 2.5vw, 3.5rem)', {
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          fontWeight: '700'
        }],

        // Large stats/numbers
        'stat': ['clamp(2rem, 1.5rem + 2vw, 3rem)', {
          lineHeight: '1',
          letterSpacing: '-0.02em',
          fontWeight: '700'
        }],
      },
      maxWidth: {
        'prose': '65ch',
        'prose-wide': '75ch',
      },
      spacing: {
        // Vertical rhythm based on line height
        'rhythm': '1.75rem',
        'rhythm-2': '3.5rem',
        'rhythm-3': '5.25rem',
      },
    },
  },
  plugins: [],
};
