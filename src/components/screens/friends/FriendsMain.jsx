import { useState, useEffect } from "react"
import FriendsSearch from "./FriendsSearch"
import FriendsHeader from "./header/FriendsHeader"
import FriendsItems from "./item/FriendsItems"
import FriendsSearchItems from "./searchitem/FriendsSearchItems"
import axios from 'axios'
const FriendsMain = () => {
  const id = localStorage.getItem("id")
  const [isFriends, setIsFriends] = useState(true)
  const [friends, setFriends] = useState([])
  const [value, setValue] = useState('')
  const getUser = async () => {
    const result = await axios.get(`http://localhost:8080/users/${id}`)
    setFriends(result.data.friends)
  }
  useEffect(() => {
    getUser()
}, [])
  return (
    <div className="friends">
      <FriendsHeader friends={friends} setIsFriends={setIsFriends}/>
      <FriendsSearch value={value} setValue={setValue} />
      {isFriends ? <FriendsItems friends={friends} value={value} /> : <FriendsSearchItems friends={friends} value={value}/>}
    </div>
  )
}

export default FriendsMain