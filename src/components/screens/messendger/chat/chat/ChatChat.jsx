import ChatChatMessage from "./ChatChatMessage"
const ChatChat = ({search, setMessage, sortMessages, messText, setMessText, help, setHelp, setSendChat, setChanged, changed, r}) => {
  return (
    <div className="chat__main">
      {search ? sortMessages.map(m => (
        <ChatChatMessage setMessage={setMessage} m={m} r={r} setChanged={setChanged} changed={changed} setSendChat={setSendChat} help={help} setHelp={setHelp} key={m.id} messText={messText} setMessText={setMessText} />
      )) : r.messages.map(m => (
        <ChatChatMessage setMessage={setMessage} m={m} r={r} setChanged={setChanged} changed={changed} setSendChat={setSendChat} help={help} setHelp={setHelp} key={m.id} messText={messText} setMessText={setMessText} />
      ))}
    </div>
  )
}
export default ChatChat