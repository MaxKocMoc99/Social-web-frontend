import '../../../styles/Mypage.scss'
import HeaderMypage from './header/HeaderMypage'
import Sidebar from "../sidebar/Sidebar"
import MainNews from './main/MainNews'
const News = () => {
  return (
    <>
      <HeaderMypage/>
      <Sidebar />
      <MainNews />
    </>
  )
}

export default News