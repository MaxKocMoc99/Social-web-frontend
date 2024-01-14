import {useEffect, useState } from "react"
import { AiOutlineCheck } from 'react-icons/ai'
import { RxCross2 } from 'react-icons/rx'
import axios from 'axios'
const MainHeaderFooter = ({ g }) => {
  const [subscribedGroups, setSubscribedGroups] = useState([])
  const id = localStorage.getItem("id")
  const getUser = async () => {
    const result = await axios.get(`http://localhost:8080/users/${id}`)
    setSubscribedGroups(result.data.subscribedGroups)
}
useEffect(() => {
    getUser()
}, [])
const amISubscribed = [...subscribedGroups].find(group => group.routingId === g.id)
  return (
      <div className="mainmypage__header__footer">
      <button className="mainmypage__header__footer__circle">
        {g.photo ? <img src={g.photo} alt='' /> : ''}
          </button>
          <div className="mainmypage__header__footer__description">
        <div className="mainmypage__header__footer__description__name">{g.name}</div>
        <button className="mainmypage__header__footer__description__button" onClick={async () => {
          if (amISubscribed) {
            await axios.post("http://localhost:8080/subscribedGroups/unsubscribeGroup", {
            id: g.id,
            userId: id
          })
          } else {
            await axios.post("http://localhost:8080/subscribedGroups/subscribeGroup", {
            id: id,
            name: g.name, 
            type: g.type,
            routingId: g.id,
            photo: g.photo, 
            subscribers: g.users.length
          })
      }
        }}>
          {amISubscribed ? <AiOutlineCheck size={18}/> : <RxCross2 size={18}/>}
            {amISubscribed ? <p>Вы подписаны</p> : <p>Подписаться</p>}
        </button>
          </div>
    </div>
  )
}

export default MainHeaderFooter