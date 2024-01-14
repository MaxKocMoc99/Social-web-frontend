import { useContext } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import {Link} from 'react-router-dom'
import { WrapperContext } from '../../../../../context/Wrapper'
import axios from 'axios'
const ChatSendItem = ({ room, message, setSendChat, rooms}) => {
  const { setWrapper } = useContext(WrapperContext)
  const id = localStorage.getItem("id")
  return (
    <Link className="chat__send__main__item" onClick={async () => {
      const room2 = [...rooms].find(room => room.routingId === id)
       await axios.post("http://localhost:8080/messages/addMessageToRoom", {
      text: message.text,
      time: message.time,
      date: message.date,
      src: message.src,
      name: message.name,
      routingId: message.routingId,
      photo: message.photo,
      roomId: room.id,
      roomdId2: room2.id
     })
      setSendChat(false)
      setWrapper('wrapper')
      }}>
      <div className="chat__send__main__item__circle">
        {room.photo ? <img src={room.photo} alt=''/> : ''}
          </div>
      <p className="chat__send__main__item__text">{room.name}</p>
          <IoIosArrowForward className="chat__send__main__item__to" color='gray' size={24}/>
    </Link>
  )
}

export default ChatSendItem