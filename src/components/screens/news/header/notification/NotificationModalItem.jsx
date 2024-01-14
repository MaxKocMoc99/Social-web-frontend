import { AiOutlineCheck } from 'react-icons/ai'
import {RxCross1} from 'react-icons/rx'
import {Link} from 'react-router-dom'
import axios from "axios"
const NotificationModalItem = ({ n, name, photo, surname, id, friends }) => {
  return (
    <div className="notification__modal__main__item">
    <div className="notification__modal__main__item__div">
              <Link className="notification__modal__main__item__div__circle" to={`/${n.routingId}`}>
          {n.photo ? <img src={n.photo} alt=''/> : ''}
      </Link>
      <div className="notification__modal__main__item__div__info">
        <p>{n.name} {n.surname} подал(-a) заявку в друзья</p>
        <p>{n.date}</p>
      </div>
    </div>
      {n.isAgreed ? <div className="notification__modal__main__item__agreed">
        <AiOutlineCheck color="gray" size={18}/>
     <p>Заявка принята</p>
      </div> : n.isCancelled ? <div className="notification__modal__main__item__agreed">
        <RxCross1 color="gray" size={18}/>
     <p>Заявка отклонена</p>
      </div> : <div className="notification__modal__main__item__buttons">
        <button className="notification__modal__main__item__buttons__add" onClick={async () => {
          if (![...friends].find(f => f.routingId === n.routingId)) {
            await axios.post("http://localhost:8080/notifications/agree", {
              id: n.id,
              userId: id,
              name: n.name,
              surname: n.surname,
              photo: n.photo,
              routingId: n.routingId,
              userId2: n.routingId,
              name2: name,
              surname2: surname,
              photo2: photo,
              routingId2: id,
              })
          }
        }}>Добавить в друзья</button>
            <button className="notification__modal__main__item__buttons__reject" onClick={async () => {
               await axios.post("http://localhost:8080/notifications/cancel", {
              id: n.id
              })
        }}>Отклонить</button>
      </div>}
  </div>
  )
}

export default NotificationModalItem