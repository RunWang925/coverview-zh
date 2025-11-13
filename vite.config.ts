import path from 'node:path'
import process from 'node:process'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig, loadEnv } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig(({ mode }) => {
  // 加载 .env 中以 REACT_APP_ 为前缀的变量
  const envFromFile = loadEnv(mode, process.cwd(), 'REACT_APP_')
  
  // 合并：系统环境变量优先级高于 .env 文件
  const finalEnv = { ...envFromFile, ...process.env }

  return {
    define: {
      'import.meta.env.REACT_APP_UNSPLASH_ACCESS_KEY': JSON.stringify(
        finalEnv.REACT_APP_UNSPLASH_ACCESS_KEY
      ),
      'import.meta.env.REACT_APP_AUTHOR': JSON.stringify(
        finalEnv.REACT_APP_AUTHOR
      ),
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