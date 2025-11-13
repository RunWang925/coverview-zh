import path from 'node:path'
import process from 'node:process'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig, loadEnv } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import config from './config' // 导入根目录配置

export default defineConfig(({ mode }) => {
  const envFromFile = loadEnv(mode, process.cwd(), 'REACT_APP_')
  const finalEnv = { ...envFromFile, ...process.env }

  return {
    define: {
      // Unsplash 密钥（保留原有逻辑）
      'import.meta.env.REACT_APP_UNSPLASH_ACCESS_KEY': JSON.stringify(
        finalEnv.REACT_APP_UNSPLASH_ACCESS_KEY
      ),
      // 作者名称（关联 config.ts）
      'import.meta.env.REACT_APP_AUTHOR': JSON.stringify(config.appAuthor),
      // 新增：浏览器标题注入（关键补充，用于 index.html）
      'import.meta.env.VITE_BROWSER_TITLE': JSON.stringify(config.browserTitle),
    },
    plugins: [
      react(),
      tailwindcss(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(__dirname, 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
        customDomId: '__svg__icons__dom__',
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  }
})