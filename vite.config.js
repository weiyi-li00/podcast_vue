import { fileURLToPath, URL } from 'node:url'
import path from 'path'; // 引入 Node.js 的 path 模組
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {
  ElementPlusResolver,
  AntDesignVueResolver,
  VantResolver,
  HeadlessUiResolver,
  ElementUiResolver
} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, 
        /\.vue$/, /\.vue\?vue/, // .vue
      ],
      imports: [
        // 需要自动导入的插件，自定义导入的API
        'vue',
        'vue-router',
        'pinia',
        '@vueuse/core',
        'vue-i18n',
        {
          'axios': [
            // default imports
            ['default', 'axios'], // import { default as axios } from 'axios',
          ],
          '[package-name]': [
            '[import-names]',
            // alias
            ['[from]', '[alias]'],
          ],
        },
      ],
    }),
    Components({
      // ui库解析器，也可以自定义
      resolvers: [
        ElementPlusResolver(),
        AntDesignVueResolver(),
        VantResolver(),
        HeadlessUiResolver(),
        ElementUiResolver()
      ]
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // 全域的 SCSS 變數和 mixin 檔案路徑
        additionalData: `@import "@/assets/styles/variables.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@tailwindcss': path.resolve(__dirname, '../../../node_modules/tailwindcss')
    }
  }
})
