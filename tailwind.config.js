/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['index.html', './src/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      body: [
        'Avenir',
        'Helvetica Neue',
        'Helvetica',
        'Arial',
        'Hiragino Sans',
        'ヒラギノ角ゴシック',
        'メイリオ',
        'Meiryo',
        'YuGothic',
        'Yu Gothic',
        'ＭＳ Ｐゴシック',
        'MS PGothic',
        'sans-serif',
      ],
    },
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms')],
};
