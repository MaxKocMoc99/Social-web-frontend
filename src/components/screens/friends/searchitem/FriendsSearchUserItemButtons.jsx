import {useState , useEffect} from "react"
import { Link } from "react-router-dom"
import axios from "axios"
const FriendsSearchUserItemButtons = ({ u, friends, id }) => {
  const [subscribedUsers, setSubscribedUsers] = useState([])
  const [rooms, setRooms] = useState([])
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [photo, setPhoto] = useState('')
  const isMyFriend = [...friends].find(f => f.routingId === u.id)
  const amISubsrcibed = [...subscribedUsers].find(user => user.routingId === u.id)
  const haveIRoomWithUser = [...rooms].find(r => r.routingId == u.id)
  const thisMonth = new Date().getMonth()
  const removeFromFriends = async () => {
    const friend = [...friends].find(f => f.routingId === u.id)
    const anotherFriend = u.friends.find(f => f.routingId === id)
    await axios.post("http://localhost:8080/friends/remove", {
      id: friend.id,
      id2: anotherFriend.id
    })
  }
  const getUser = async () => {
    const result = await axios.get(`http://localhost:8080/users/${id}`)
    setSubscribedUsers(result.data.subscribedUsers)
    setName(result.data.name)
    setSurname(result.data.surname)
    setPhoto(result.data.photo)
    setRooms(result.data.rooms)
}
useEffect(() => {
 getUser()
}, [])
  let month
  switch (thisMonth) {
    case 0: month = 'янв'
      break
    case 1: month = 'фев'
    break
    case 2: month = 'марта'
    break
    case 3: month = 'апр'
    break
    case 4: month = 'мая'
    break
    case 5: month = 'июня'
    break
    case 6: month = 'июля'
    break
    case 7: month = 'авг'
    break
    case 8: month = 'сент'
    break
    case 9: month = 'окт'
    break
    case 10: month = 'нояб'
    break
    case 11: month = 'дек'
    break
  }
  return (
    <div className="friends__search-users__item__user__buttons">
      <Link to={`/im${id}`} onClick={async () => {
         if (!haveIRoomWithUser) {
          await axios.post("http://localhost:8080/rooms/createNewRoom", {
            name: u.name,
            surname: u.surname,
            photo: u.photo,
            routingId: u.id,
            userId: id,
            name2: name,
            surname2: surname,
            photo2: photo,
            routingId2: id,
            userId2: u.id,
            
         })
       }
    }}>Написать сообщение</Link>
      {isMyFriend ? <button className="friends__search-users__item__user__buttons__add" onClick={() => {
        removeFromFriends()
      }}>
        Удалить из друзей
        </button>
          : <button className="friends__search-users__item__user__buttons__add" onClick={async () => {
            if (!amISubsrcibed) {
              await axios.post("http://localhost:8080/subscribedUsers/createNewSubscribedUser", {
                userId: id,
                routingId: u.id,
                userId2: id,
                name: name,
                surname: surname,
                date: new Date().getDate().toString() + ' ' + month,
                photo: photo,
                routingId2: id
            })
        }
           }}>
            {amISubsrcibed ? 'Заявка отправлена' : 'Добавить в друзья'}
          </button>}
</div>
  )
}

export default FriendsSearchUserItemButtons