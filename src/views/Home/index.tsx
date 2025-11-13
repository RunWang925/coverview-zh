import Cover from './components/Cover'
import Header from './components/Header'

function Home() {
  return (
    <div className="bg-indigo-50/80 min-h-screen flex flex-col">
      <Header />
      <Cover />
      {/* 底部版权和链接 */}
      <footer className="mt-auto bg-indigo-50/80 py-4 border-t border-indigo-200">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-2 md:mb-0">
            © {new Date().getFullYear()} 野猪佩奇弟弟
          </p>
          <a
            href="https://hexo.814925.xyz"#这里修改跳转关于本站连接 我这里跳转文章说明
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
          >
            关于本站
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Home
