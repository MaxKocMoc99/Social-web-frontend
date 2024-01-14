import axios from 'axios'
import { AiOutlineCheck } from 'react-icons/ai'
import {FiUserPlus} from 'react-icons/fi'
const UsersSearchItemSubscribe = ({ u , friends, subscribedUsers, id, surname, photo, name}) => {
  const amISubscribed = [...subscribedUsers].find(user => user.routingId === u.id)
  const isMyFriend = [...friends].find(f => f.routingId === u.id)
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
  return (
    <button className="users__search-item__subscribe" onClick={async () => {
      if (!amISubscribed && !isMyFriend) {
        await axios.post("http://localhost:8080/notifications/send", {
          name: name,
          surname: surname,
          date: new Date().getDate().toString() + ' ' + month,
          photo: photo,
          id: u.id,
          routingId: id,
        })
      }
    }}> 
      {amISubscribed || isMyFriend ? <AiOutlineCheck color='gray' size={20} /> : <FiUserPlus color='blue' size={20} />}
  </button>
  )
}

export default UsersSearchItemSubscribe