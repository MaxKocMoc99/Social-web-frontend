import HeaderMypage from '../news/header/HeaderMypage'
import Sidebar from "../sidebar/Sidebar"
import MainCommunityPage from './main/MainCommunityPage'
const CommunityPage = ({g}) => {
    return (
      <>
                     <HeaderMypage />
            <Sidebar />
        <MainCommunityPage g={g}/>
        </>
      )
}

export default CommunityPage