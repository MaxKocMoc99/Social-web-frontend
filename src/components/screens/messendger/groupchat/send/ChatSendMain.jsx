import { useEffect, useState} from "react"
import ChatSendItem from "./item/ChatSendItem"
import axios from "axios"
const ChatSendMain = ({message, setSendChat }) => { 
  const [rooms, setRooms] = useState([])
  const id = localStorage.getItem("id")
  const getUser = async () => {
      const result = await axios.get(`http://localhost:8080/users/${id}`)
      setRooms(result.data.rooms)
  }
  useEffect(() => {
   getUser()
  }, [])
  return (
    <div className="chat__send__main">
      {rooms.map(room => (
        <ChatSendItem rooms={rooms} setSendChat={setSendChat} message={message} key={room.id} room={room}/>
      ))}
    </div>
  )
}

export default ChatSendMain