module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
        },
        amber: {
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        purple: {
          900: '#260046',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
};
