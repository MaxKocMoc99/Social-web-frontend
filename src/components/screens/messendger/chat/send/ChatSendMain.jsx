import { useEffect, useState} from "react"
import ChatSendItem from "./item/ChatSendItem"
import axios from "axios"
const ChatSendMain = ({ r, message, setSendChat }) => { 
  const [rooms, setRooms] = useState([])
  const id = localStorage.getItem("id")
  const getUser = async () => {
      const result = await axios.get(`http://localhost:8080/users/${id}`)
      setRooms(result.data.rooms)
  }
  useEffect(() => {
   getUser()
  }, [])
  const roomsWithoutUser = [...rooms].filter(room => room.id !== r.id)
  return (
    <div className="chat__send__main">
      {roomsWithoutUser.map(room => (
        <ChatSendItem rooms={rooms} setSendChat={setSendChat} message={message} key={room.id} room={room}/>
      ))}
    </div>
  )
}

export default ChatSendMain