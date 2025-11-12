import Footer from '@/components/Footer'
import Cover from './components/Cover'
import Header from './components/Header'
// 注释不需要的组件导入
// import Importance from './components/Importance'
// import Supports from './components/Supports'
// import Usage from './components/Usage'
// import WallOfLove from './components/WallOfLove'

function Home() {
  return (
    <>
      <Header />
      <Cover />
      {/* 注释掉不需要渲染的组件 */}
      {/* <Importance /> */}
      {/* <Usage /> */}
      {/* <Supports /> */}
      {/* <WallOfLove /> */}
      {/* <Footer /> */}
    </>
  )
}

export default Home
