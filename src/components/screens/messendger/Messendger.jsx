import '../../../styles/Mypage.scss'
import HeaderMypage from '../news/header/HeaderMypage'
import Sidebar from "../sidebar/Sidebar"
import MainMessendger from './main/MainMessendger'
const Messendger = () => {
  return (
    <>
                   <HeaderMypage />
          <Sidebar />
          <MainMessendger/>
        </>
      )
}

export default Messendger