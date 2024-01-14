import { FiUserX } from 'react-icons/fi'
import { BiUserCheck } from 'react-icons/bi'
import axios from 'axios'
const MainHeaderFooterFriend = ({ setFriend, u, friends, subscribedUsers, id, name, surname, photo}) => {
  const isMyFriend = [...friends].find(f => f.routingId === u.id)
  const amISubsrcibed = [...subscribedUsers].find(user => user.id === u.id)
  const thisMonth = new Date().getMonth()
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
  const removeFromFriends = async () => {
    const friend = [...friends].find(f => f.routingId === u.id)
    const anotherFriend = u.friends.find(f => f.routingId === id)
    await axios.post("http://localhost:8080/friends/remove", {
      id: friend.id,
      id2: anotherFriend.id
    })
  }
  return (
    <div className="mainmypage__header__footer__description__friend" onMouseLeave={() => setFriend(false)} onMouseEnter={() => setFriend(true)}>
    <div>
      {isMyFriend ? <FiUserX size={20} /> : <BiUserCheck size={26} />}
        {isMyFriend ? <p onClick={() => {
        removeFromFriends()
        }}>Удалить из друзей</p> : <p onClick={async () => {
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
        }}>{amISubsrcibed ? 'Заявка отправлена' : 'Добавить в друзья'}</p>}
    </div>
</div>
  )
}

export default MainHeaderFooterFriend