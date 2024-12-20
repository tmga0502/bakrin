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
            darkGreen:   '#7ae4b3',
            mainYellow:  '#FFC107',
            lightYellow: '#fadd4e',
            darkYellow:  '#dabd78',
            white:       '#FFFFFF',
            bakGray:     '#dddddd',
            success:     '#22c55e',
            info:        '#38bdf8',
            danger:      '#dc2626',
	        pink:        '#EA599C',
            warning:     '#fbbf24',
            default:     '#737373',
            lightGray:   '#d6d6d6',
            bakDark:     '#757575',
            black:       '#131313',
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

