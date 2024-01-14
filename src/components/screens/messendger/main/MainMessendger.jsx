import { useState, useEffect } from 'react'
import '../../../../styles/Mypage.scss'
import MessengerItem from '../MessengerItem'
import axios from 'axios'
const MainMessendger = () => {
  const [rooms, setRooms] = useState([])
  const [groupRooms, setGroupRooms] = useState([])
  const id = localStorage.getItem("id")
  const getUser = async () => {
    const result = await axios.get(`http://localhost:8080/users/${id}`)
    setRooms(result.data.rooms)
    setGroupRooms(result.data.groupRooms)
  }
  useEffect(() => {
   getUser()
  }, [])
  const allChats = [...rooms].concat(groupRooms)
  return (
    <div className="mainmessendger">
      {allChats.map(r => (
        <MessengerItem id={id} key={r.id} r={r}/>
      ))}
    </div>
  )
}

export default MainMessendger