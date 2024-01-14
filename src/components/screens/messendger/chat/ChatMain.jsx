import ChatChat from './chat/ChatChat'
import ChatFooter from "./footer/ChatFooter"
import ChatHeader from "./header/ChatHeader"
import { useState, useMemo} from 'react'
import ChatSend from './send/ChatSend'
const ChatMain = ({ r }) => {
  const [messText, setMessText] = useState('')
  const [value, setValue] = useState('')
  const [message, setMessage] = useState()
  const [search, setSearch] = useState(false)
  const [help, setHelp] = useState(false)
  const [sendChat, setSendChat] = useState(false)
  const [changed, setChanged] = useState(false)
  const sortMessages = useMemo(() => {
    return r.messages.filter(m => m.text.includes(value))
  }, [value, r.messages])
  return (
      <div className="chat">
      <ChatHeader search={search} setSearch={setSearch} r={r} value={value} setValue={setValue}/>
      <ChatChat setMessage={setMessage} search={search} r={r} sortMessages={sortMessages} changed={changed} setChanged={setChanged} setSendChat={setSendChat} help={help} setHelp={setHelp} messText={messText} setMessText={setMessText}/>
      <ChatFooter setHelp={setHelp} setChanged={setChanged} message={message} setMessage={setMessage} r={r} changed={changed} messText={messText} setMessText={setMessText}/>
      <ChatSend message={message} r={r} sendChat={sendChat} setSendChat={setSendChat} />
    </div>
  )
}

export default ChatMain