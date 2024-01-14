import InputChatFooter from "./InputChatFooter"
const ChatFooter = ({ messText, setMessText, changed, setChanged, r, setMessage, message, setHelp}) => {
  return (
      <div className="chat__footer">
      <InputChatFooter setHelp={setHelp} setChanged={setChanged} message={message} setMessage={setMessage} r={r} changed={changed} messText={messText} setMessText={setMessText}/>
    </div>
  )
}

export default ChatFooter