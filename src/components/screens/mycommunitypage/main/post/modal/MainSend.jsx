import MainSendHeader from "./MainSendHeader"
import MainSendUsers from "./MainSendUsers"
const MainSend = ({modal, setModal, post}) => {
  return (
      <div className={modal}>
      <MainSendHeader setModal={setModal} post={post}/>
      <MainSendUsers setModal={setModal} post={post}/>
    </div>
  )
}

export default MainSend