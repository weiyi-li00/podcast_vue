
module.exports = {
  content: [
    "./src/**/*.{html, js, ts, vue}", 
    "./src/**/*"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  corePlugins: {
    // 使用別名簡化路徑
    preflight: false,
  },
}

