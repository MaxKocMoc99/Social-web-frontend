import ChatInfoModalFooter from './ChatInfoModalFooter'
import ChatInfoModalHeader from './ChatInfoModalHeader'
import ChatInfoModalMain from './ChatInfoModalMain'
const ChatInfoModal = ({ setChatInfoModal, r }) => {
  return (
      <div className="chat__header__chat-info">
      <ChatInfoModalHeader setChatInfoModal={setChatInfoModal}/>
      <ChatInfoModalMain r={r}/>
      <ChatInfoModalFooter r={r} />
      </div>
  )
}

export default ChatInfoModal