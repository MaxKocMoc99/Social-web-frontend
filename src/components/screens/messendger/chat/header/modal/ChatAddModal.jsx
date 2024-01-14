import ChatModalCreate from "./ChatModalCreate"
import ChatModalHeader from "./ChatModalHeader"
import ChatModalItem from "./ChatModalItem"
import { useState, useEffect } from "react"
import axios from "axios"
const ChatAddModal = ({ chatModalAdd, setChatModalAdd, setNewChat, r }) => {
  const [groupRooms, setGroupRooms] = useState([])
  const id = localStorage.getItem("id")
  const getUser = async () => {
      const result = await axios.get(`http://localhost:8080/users/${id}`)
      setGroupRooms(result.data.groupRooms)
  }
  useEffect(() => {
   getUser()
  }, [])
  return (
      <div className={chatModalAdd}>
      <ChatModalHeader r={r} setChatModalAdd={setChatModalAdd} />
      <ChatModalCreate setChatModalAdd={setChatModalAdd} setNewChat={setNewChat} />
      {groupRooms.map(chat => (
        <ChatModalItem r={r} chat={chat} key={chat.id}/>
      ))}
    </div>
  )
}

export default ChatAddModal