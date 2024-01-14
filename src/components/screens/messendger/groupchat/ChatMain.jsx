import ChatChat from './chat/ChatChat'
import ChatFooter from "./footer/ChatFooter"
import ChatHeader from "./header/ChatHeader"
import { useState, useMemo} from 'react'
import ChatSend from './send/ChatSend'
const ChatMain = ({ r }) => {
  const [search, setSearch] = useState(false)
  const [messText, setMessText] = useState('')
  const [help, setHelp] = useState(false)
  const [sendChat, setSendChat] = useState('none')
  const [changed, setChanged] = useState(false)
  const [value, setValue] = useState('')
  const [message, setMessage] = useState()
  const sortMessages = useMemo(() => {
    return r.messages.filter(m => m.messText.includes(value))
  }, [value, r.messages])
  return (
      <div className="chat">
      <ChatHeader search={search} setSearch={setSearch} r={r} value={value} setValue={setValue}/>
      <ChatChat r={r} setMessage={setMessage} search={search} sortMessages={sortMessages} changed={changed}  setChanged={setChanged} sendChat={sendChat} setSendChat={setSendChat} help={help} setHelp={setHelp} messText={messText} setMessText={setMessText}/>
      <ChatFooter setHelp={setHelp} setChanged={setChanged} message={message} setMessage={setMessage} r={r} changed={changed} messText={messText} setMessText={setMessText}/>
      <ChatSend message={message} sendChat={sendChat} setSendChat={setSendChat} />
    </div>
  )
}

export default ChatMain