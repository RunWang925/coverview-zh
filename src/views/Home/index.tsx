import Cover from './components/Cover'
import Header from './components/Header'
import config from '@/../config'

function Home() {
  return (
    <div className="bg-indigo-50/80 min-h-screen flex flex-col">
      <Header />
      <Cover />
      {/* 底部版权和链接 */}
      <footer className="mt-auto bg-indigo-50/80 py-4 border-t border-indigo-200">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <a
            href={config.ownerUrl}
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-indigo-800 text-sm mb-2 md:mb-0"
          >
            © {new Date().getFullYear()} {config.copyrightOwner}
          </a>
          <a
            href={config.aboutSiteUrl} 
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-indigo-800 text-sm"
          >
            {config.aboutSiteText}
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Home
