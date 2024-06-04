/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.tsx",
  ],
  theme: {
    extend: {
        colors: {
            mainGreen:   '#00BF63',
            lightGreen:  '#05FF87',
            darkGreen:   '#6AA98A',
            mainYellow:  '#DEE62B',
            lightYellow: '#ECF084',
            darkYellow:  '#D2D198',
            white:       '#FFFFFF',
            // gray:        '#F8F8F8',
            success:     '#22c55e',
            info:        '#38bdf8',
            danger:      '#dc2626',
            warning:     '#fbbf24',
            default:     '#737373',
            bakDark:     '#757575',
            black:       '#000000',
        },
        fontSize: {
            mainFont: '16px',
        },
        zIndex: {
            '100': '100',
        },
        boxShadow: {
            'ribbon': '0 2px 2px rgba(0, 0, 0, 0.12)',
        }
    },
  },
  plugins: [],
}

