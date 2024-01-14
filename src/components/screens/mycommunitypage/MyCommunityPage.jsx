import HeaderMypage from '../news/header/HeaderMypage'
import Sidebar from "../sidebar/Sidebar"
import MainMyCommunityPage from './main/MainMyCommunityPage'
const MyCommunityPage = ({g}) => {
    return (
      <>
                     <HeaderMypage />
            <Sidebar />
        <MainMyCommunityPage g={g} />
        </>
      )
}

export default MyCommunityPage