module.exports = {
  purge: [
    'public/index.html',
    'src/**/*.js',
    'src/**/*.vue',
  ],
  theme: {
    typography: {
      default: {
        css: {
          color: '#fff',
          a: {
            color: '#fff',
            '&:hover': {
              color: '#fff',
            },
          },
          h3: {
            color: '#fff'
          },
          h4: {
            color: '#fff'
          },
          blockquote: {
            color: '#fff'
          },
          strong: {
            color: '#fff',
          },
          
        },
      },
    },

    extend: {
      colors: {
        gray: {
          100: '#EBF1F5',
          200: '#D9E3EA',
          300: '#C5D2DC',
          400: '#9BA9B4',
          500: '#707D86',
          600: '#55595F',
          700: '#33363A',
          800: '#25282C',
          900: '#151719',
        },
        purple: {
          100: '#F4F4FF',
          200: '#E2E1FF',
          300: '#CBCCFF',
          400: '#ABABFF',
          500: '#8D8DFF',
          600: '#5D5DFF',
          700: '#4B4ACF',
          800: '#38379C',
          900: '#262668',
        },
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'architects-daughter': ['"Architects Daughter"', 'sans-serif']
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        'full': '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        '10': '2.5rem',
      },
      scale: {
        '98': '.98'
      },      
      customForms: theme => ({
        default: {
          'input, textarea, multiselect, select, checkbox, radio': {
            backgroundColor: 'transparent',
            borderColor: theme('colors.gray.700'),
            borderRadius: theme('borderRadius.sm'),
            '&:focus': {
              outline: undefined,
              boxShadow: undefined,
              borderColor: theme('colors.gray.500'),
            },
          },
          'input, textarea, multiselect, select': {
            backgroundColor: 'transparent',
            fontSize: undefined,
            lineHeight: undefined,
            paddingTop: theme('spacing.3'),
            paddingRight: theme('spacing.4'),
            paddingBottom: theme('spacing.3'),
            paddingLeft: theme('spacing.4'),
          },
          'input, textarea': {
            '&::placeholder': {
              color: theme('colors.gray.500'),
            },
          },
          select: {
            paddingRight: theme('spacing.10'),
            iconColor: theme('colors.gray.500'),
          },
          'checkbox, radio': {
            color: theme('colors.purple.600'),
            backgroundColor: 'transparent',
          },
        },
      }),
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'focus-within'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('@tailwindcss/typography'),
  ],
};

// module.exports = {
//   purge: false,
//   theme: {
//     extend: {
//       spacing: {
//         '80': '20rem',
//         '108': '27rem',
//       },
//       borderWidth: {
//         '14': '14px',
//       }
//     },
//     container: {
//       padding: '1rem'
//     },
//     colors: {
//       background: {
//         primary: 'var(--bg-background-primary)',
//         secondary: 'var(--bg-background-secondary)',
//         tertiary: 'var(--bg-background-tertiary)',

//         form: 'var(--bg-background-form)',
//       },

//       copy: {
//         primary: 'var(--text-copy-primary)',
//         secondary: 'var(--text-copy-hover)',
//       },

//       'border-color': {
//         primary: 'var(--border-border-color-primary)',
//       },

//       transparent: 'transparent',

//       black: '#000',
//       white: '#fff',

//       green: {
//         100: '#f0fff4',
//         200: '#c6f6d5',
//         300: '#9ae6b4',
//         400: '#68d391',
//         500: '#48bb78',
//         600: '#38a169',
//         700: '#2f855a',
//         800: '#276749',
//         900: '#22543d',
//       },

//       gray: {
//         100: '#f7fafc',
//         200: '#edf2f7',
//         300: '#e2e8f0',
//         400: '#cbd5e0',
//         500: '#a0aec0',
//         600: '#718096',
//         700: '#4a5568',
//         800: '#2d3748',
//         900: '#1a202c',
//       },
//     },
//     fontFamily: {
//       sans: [
//         'Nunito Sans',
//         'Roboto',
//         '-apple-system',
//         'BlinkMacSystemFont',
//         '"Segoe UI"',
//         '"Helvetica Neue"',
//         'Arial',
//         '"Noto Sans"',
//         'sans-serif',
//         '"Apple Color Emoji"',
//         '"Segoe UI Emoji"',
//         '"Segoe UI Symbol"',
//         '"Noto Color Emoji"',
//       ],
//       serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
//       mono: [
//         'Menlo',
//         'Monaco',
//         'Consolas',
//         '"Liberation Mono"',
//         '"Courier New"',
//         'monospace',
//       ],
//     },
//   },
//   variants: {
//     // Some useful comment
//   },
//   plugins: [
//     // Some useful comment
//   ]
// }
