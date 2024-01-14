import MainHeaderFooterActions from './MainHeaderFooterActions'
import MainHeaderFooterButtons from './MainHeaderFooterButtons'
import { useState, useEffect } from 'react'
import MainHeaderFooterFriend from './MainHeaderFooterFriend'
import axios from 'axios'
const MainHeaderFooter = ({ moreModal, setMoreModal, u }) => {
  const [friend, setFriend] = useState(false)
  const [friends, setFriends] = useState([])
  const [rooms, setRooms] = useState([])
  const [subscribedUsers, setSubscribedUsers] = useState([])
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [photo, setPhoto] = useState('')
  const id = localStorage.getItem("id")
  const getUser = async () => {
      const result = await axios.get(`http://localhost:8080/users/${id}`)
    setFriends(result.data.friends)
    setName(result.data.name)
    setSurname(result.data.surname)
    setPhoto(result.data.photo)
    setRooms(result.data.rooms)
  }
  useEffect(() => {
   getUser()
  }, [])
  return (
      <div className="mainmypage__header__footer">
      <button className="mainmypage__header__footer__circle">
        {u.photo ? <img src={u.photo} alt='' /> : ''}
          </button>
          <div className="mainmypage__header__footer__description">
              <div className="mainmypage__header__footer__description__name">{u.name} {u.surname}</div>
        <MainHeaderFooterButtons moreModal={moreModal} setMoreModal={setMoreModal} u={u}/> 
        <MainHeaderFooterActions rooms={rooms} name={name} surname={surname} photo={photo} id={id} friends={friends} setFriend={setFriend} u={u} />
        {friend && <MainHeaderFooterFriend name={name} surname={surname} photo={photo} id={id} subscribedUsers={subscribedUsers} friends={friends} u={u} setFriend={setFriend} />}
          </div>
    </div>
  )
}

export default MainHeaderFooter