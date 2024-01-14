import FriendsUserItem from "./FriendsUserItem"
import {FiMoreHorizontal} from 'react-icons/fi'
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
const FriendsItem = ({ f }) => {
    const [removeFriend, setRemoveFriend] = useState(false)
    const [friends, setFriends] = useState([])
    const id = localStorage.getItem("id")
    const removeFromFriends = async () => {
    const anotherFriend = [...friends].find(friend => friend.routingId === id)
      await axios.post("http://localhost:8080/friends/remove", {
        id: f.id,
        id2: anotherFriend.id
      })
    }
    useEffect(() => {
      getAnotherUser()
    }, [])
  const getAnotherUser = async () => {
  const result = await axios.get(`http://localhost:8080/users/${f.routingId}`)
  setFriends(result.data.friends)
  }
  return (
    <div className="friends__items__item" key={f.id}>
    <Link to={`/${f.routingId}`} className="friends__items__item__circle" >
      {f.photo ? <img src={f.photo} alt='' /> : ''}
    </Link>
    <FriendsUserItem f={f} />
    <FiMoreHorizontal cursor='pointer' fontSize={26} color="gray" className="friends__items__item__user__more" onClick={() => setRemoveFriend(prev => !prev)} />
  {removeFriend && <div className="friends__items__item__remove">
    <button onClick={() => {
    removeFromFriends()
      }}>
        Убрать из друзей
      </button>
    </div>}
      </div>
  )
}

export default FriendsItem