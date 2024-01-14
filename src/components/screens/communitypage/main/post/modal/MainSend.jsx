import MainSendHeader from "./MainSendHeader"
import MainSendUsers from "./MainSendUsers"
const MainSend = ({modal, setModal, post}) => {
  return (
      <div className={modal}>
      <MainSendHeader setModal={setModal} post={post}/>
      <MainSendUsers post={post} setModal={setModal}/>
    </div>
  )
}

export default MainSend