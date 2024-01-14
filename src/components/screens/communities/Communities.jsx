import HeaderMypage from "../news/header/HeaderMypage"
import Sidebar from "../sidebar/Sidebar"
import '../../../styles/Mypage.scss'
import CommunitiesMain from "./CommunitiesMain"
const Communities = () => {
  return (
    <>
                   <HeaderMypage />
          <Sidebar />
          <CommunitiesMain/>
    </>
  )
}

export default Communities