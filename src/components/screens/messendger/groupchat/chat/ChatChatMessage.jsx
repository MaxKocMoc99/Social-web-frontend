import ChatChatUserInfo from "./ChatChatUserInfo"
import { useContext} from "react"
import axios from "axios"
import { HiOutlineTrash } from 'react-icons/hi2'
import { WrapperContext } from "../../../../context/Wrapper"
const ChatChatMessage = ({ m, setMessage, setMessText, setHelp, setSendChat, setChanged, changed, messText}) => {
  const removeMessage = async () => {
    await axios.post("http://localhost:8080/messages/removeMessageFromGroupRoom", {
       searchId: m.searchId
     })
 }
  const { setWrapper } = useContext(WrapperContext)
  return (
    <div className="chat__main__item">
    <button onClick={() => {
      if (m.isHelped == false) {
        setHelp(m.isHelped = true)
      } else {
        setHelp(m.isHelped = false)
      }
      }} className="chat__main__item__button">
        <div className="chat__main__item__circle">
          {m.photo ? <img src={m.photo} alt=""/> : ''}
      </div>
        <ChatChatUserInfo changed={changed} messText={messText} m={m} />
      </button>
      {m.isHelped && <div className='chat__main__item__help'>
        <button onClick={() => {
          setSendChat('chat__send')
          setHelp(m.isHelped = false)
          setWrapper('darkwrapper')
          setMessage(m)
        }} className="chat__main__item__help__send chat__main__item__help__item">
          <p>Переслать</p>
        </button>
        <button onClick={() => {
          if (changed == false) {
            setMessText(m.messText)
            setChanged(true)
            setMessage(m)
          } else {
            setChanged(false)
            setMessText('')
            setHelp(m.isHelped = false)
            setMessage()
          }
        }} className="chat__main__item__help__change chat__main__item__help__item">
          <p>Изменить</p>
        </button>
        <button onClick={() => {
          removeMessage()
          setHelp(m.isHelped = false)
          setMessText('')
        } } className="chat__main__item__help__remove chat__main__item__help__item">
          <p>Удалить</p>
          <HiOutlineTrash size={20} color={'red'} className="chat__main__item__remove" />
        </button>
      </div>}
    </div>

  )
}
export default ChatChatMessage