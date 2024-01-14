import HeaderMypage from "../news/header/HeaderMypage"
import Sidebar from "../sidebar/Sidebar"
import '../../../styles/Mypage.scss'
import FriendsMain from "./FriendsMain"
const Friends = () => {
  return (
    <>
                   <HeaderMypage />
          <Sidebar />
          <FriendsMain/>
    </>
  )
}

export default Friends