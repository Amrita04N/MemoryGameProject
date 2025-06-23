module.exports = {
  plugins: [
    require('@tailwindcss/postcss')({
      config: './tailwind.config.js', // optional if your file is named that
    }),
    require('autoprefixer'),
  ],
};

