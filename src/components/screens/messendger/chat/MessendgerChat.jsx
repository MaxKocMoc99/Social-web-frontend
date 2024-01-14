import '../../../../styles/Mypage.scss'
import HeaderMypage from '../../news/header/HeaderMypage'
import Sidebar from '../../sidebar/Sidebar'
import ChatMain from './ChatMain'
const MessendgerChat = ({r}) => {
  return (
    <>
                   <HeaderMypage />
      <Sidebar />
      <ChatMain r={r}/>
        </>
      )
}

export default MessendgerChat