import {useState, useEffect } from "react"
import NewChatFooter from "./NewChatFooter"
import NewChatHeader from "./NewChatHeader"
import NewChatUser from "./NewChatUser"
import {} from "react"
import axios from "axios"
const NewChat = ({ newChat, setNewChat, setChatModalAdd, r }) => {
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
  const [value, setValue] = useState('')
  const [chatPhoto, setChatPhoto] = useState('')
  const addImage = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
     setChatPhoto(reader.result)
  }
    reader.readAsDataURL(file)
  }
  return (
      <div className={newChat}>
      <NewChatHeader setChatModalAdd={setChatModalAdd} setNewChat={setNewChat} />
      {rooms.map(r => (
        <NewChatUser r={r} key={r.id} setChosenUsers={setChosenUsers} chosenUsers={chosenUsers}/>
      ))}
      <NewChatFooter addImage={addImage} chosenUsers={chosenUsers} value={value} setValue={setValue} chatPhoto={chatPhoto}/>
    </div>
  )
}

export default NewChat