import HeaderMypage from '../news/header/HeaderMypage'
import Sidebar from "../sidebar/Sidebar"
import MainUserPage from './main/MainUserPage'
const UserPage = ({u}) => {
    return (
      <>
                     <HeaderMypage />
            <Sidebar />
        <MainUserPage u={u}/>
        </>
      )
}

export default UserPage