import ChatSendHeader from "./ChatSendHeader"
import ChatSendMain from "./ChatSendMain"
const ChatSend = ({sendChat, setSendChat, r, message}) => {
  return (
      <>
    {sendChat && <div className="chat__send">
    <ChatSendHeader setSendChat={setSendChat} />
    <ChatSendMain setSendChat={setSendChat} message={message}/>
      </div>}
      </>
  )
}

export default ChatSend