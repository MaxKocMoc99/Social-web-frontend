import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
const FriendsUserItemButtons = ({ f }) => {
  const id = localStorage.getItem("id")
  const [rooms, setRooms] = useState([])
  const [photo, setPhoto] = useState('')
  const [name, setName] = useState('')
  const getUser = async () => {
    const result = await axios.get(`http://localhost:8080/users/${id}`)
    setRooms(result.data.rooms)
    setName(result.data.name)
    setPhoto(result.data.photo)
  }
  useEffect(() => {
    getUser()
  },[])
  const haveIRoomWithUser = [...rooms].find(r => r.routingId == f.routingId)
  return (
    <div className="friends__items__item__user__buttons">
      <Link to={`/im${id}`} onClick={async () => {
        if (!haveIRoomWithUser) {
          await axios.post("http://localhost:8080/rooms/createNewRoom", {
            name: f.name,
            surname: f.surname,
            photo: f.photo,
            routingId: f.routingId,
            userId: id,
            name2: name,
            surname2: surname,
            photo2: photo,
            routingId2: id,
            userId2: f.routingId,
         })
       }
    }}>Написать сообщение</Link>
</div>
  )
}

export default FriendsUserItemButtons