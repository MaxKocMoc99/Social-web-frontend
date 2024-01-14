import { useContext, useState, useEffect } from 'react'
import { WrapperContext } from '../../../../../context/Wrapper'
import axios from 'axios'
const MainSendUsers = ({setModal, post }) => {
  const {setWrapper} = useContext(WrapperContext)
  let hours, minutes, month
  const thisHours = new Date().getHours()
  const thisMinutes = new Date().getMinutes()
  const thisMonth = new Date().getMonth()
  const [name, setName] = useState('')
  const [photo, setPhoto] = useState('')
  const [rooms, setRooms] = useState([])
  const [user2Rooms, setUser2Rooms] = useState([])
  if (thisHours < 10) {
    switch (thisHours) {
      case 0: hours = '00'
      break
      case 1: hours = '01'
        break
        case 2: hours = '02'
        break
        case 3: hours = '03'
        break
        case 4: hours = '04'
        break
        case 5: hours = '05'
        break
        case 6: hours = '06'
        break
        case 7: hours = '07'
        break
        case 8: hours = '08'
        break
        case 9: hours = '09'
        break
    }
  } else {
    hours = thisHours.toString()
  }
  if (thisMinutes < 10) {
    switch (thisMinutes) {
      case 0: minutes = '00'
      break
      case 1: minutes = '01'
        break
        case 2: minutes  = '02'
        break
        case 3: minutes  = '03'
        break
        case 4: minutes  = '04'
        break
        case 5: minutes  = '05'
        break
        case 6: minutes  = '06'
        break
        case 7: minutes  = '07'
        break
        case 8: minutes  = '08'
        break
        case 9: minutes  = '09'
        break
    }
  } else {
    minutes = thisMinutes.toString()
  }
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
  const getUser = async () => {
    const result = await axios.get(`http://localhost:8080/users/${id}`)
    setName(result.data.name)
    setPhoto(result.data.photo)
    setRooms(result.data.rooms)
  }
  const getAnotherUser = async () => {
    const result = await axios.get(`http://localhost:8080/users/${r.routingId}`)
    setUser2Rooms(result.data.rooms)
  }
  useEffect(() => {
    getUser()
    getAnotherUser()
  }, [])
  const room2 = [...rooms].find(room => room.routingId === id)
  return (
    <div className="main__post__send__items">
      {rooms.map(r => (
        <div onClick={async () => {
          await axios.post("http://localhost:8080/messages/sendPost", {
            text: post.text,
            time: hours + ':' + minutes,
            date: new Date().getDate().toString() + ' ' + month,
            src: post.img,
            name: name,
            routingId: id,
            photo: photo,
            searchId: Math.floor(Math.random() * 100000000).toString(),
            roomId: r.id,
            roomId2: room2.id,
            postId: post.id
          })
            setWrapper('darkwrapper')
          setModal('main__post__send')
        }} key={r.id} className="main__post__send__item">
      <div className="main__post__send__item__circle">
        {r.photo ? <img alt="" src={r.photo}/>  : ''}
      </div>
      <div className="main__post__send__item__name">{r.name}</div>
      </div>
      ))
      }
    </div>
  )
}

export default MainSendUsers