import { BiUserCheck } from 'react-icons/bi'
import {FiUserX} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import axios from 'axios'
const MainHeaderFooterActions = ({ u, setFriend, friends, id, name, photo, surname, rooms}) => {
  const isMyFriend = [...friends].find(f => f.routingId === u.id)
  const haveIRoomWithUser = [...rooms].find(r => r.routingId == u.id)
  return (
      <div className="mainmypage__header__footer__description__actions">
      <Link className="mainmypage__header__footer__description__actions__button" to={`/im${id}`} onClick={async () => {
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
          }}>Сообщение</Link>
      <div className="mainmypage__header__footer__description__actions__block" onMouseLeave={() => setFriend(false)} onMouseEnter={() => setFriend(true)}>
       {isMyFriend ?  <BiUserCheck size={26} /> : <FiUserX size={20}/>}
      </div>
      </div>
  )
}

export default MainHeaderFooterActions