import '../../../styles/Mypage.scss'
import HeaderMypage from '../news/header/HeaderMypage'
import Sidebar from "../sidebar/Sidebar"
import MainMypage from './main/MainMypage'
const Mypage = () => {
    return (
      <>
                     <HeaderMypage />
            <Sidebar />
         <MainMypage/>
        </>
      )
}

export default Mypage