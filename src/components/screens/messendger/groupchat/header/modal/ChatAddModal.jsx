import { useEffect, useState } from "react"
import ChatModalFooter from "./ChatModalFooter"
import ChatModalHeader from "./ChatModalHeader"
import NewChatUser from "./newchat/NewChatUser"
import axios from "axios"
const ChatAddModal = ({ chatModalAdd, setChatModalAdd, r }) => {
  const [rooms, setRooms] = useState([])
  const id = localStorage.getItem("id")
  const getUser = async () => {
      const result = await axios.get(`http://localhost:8080/users/${id}`)
      setRooms(result.data.rooms)
  }
  useEffect(() => {
   getUser()
  }, [])
  const [chosenUsers, setChosenUsers] = useState([])
  return (
      <div className={chatModalAdd}>
      <ChatModalHeader r={r} setChatModalAdd={setChatModalAdd} />
      {rooms.map(room => (
        <NewChatUser r={r} room={room} chosenUsers={chosenUsers} setChosenUsers={setChosenUsers} key={room.id} />
      ))}
      <ChatModalFooter r={r} chosenUsers={chosenUsers} setChatModalAdd={setChatModalAdd}/>
    </div>
  )
}

export default ChatAddModal