import { MdOutlinePhotoCamera } from 'react-icons/md'
import { FaArrowRight } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import axios from 'axios'
const InputChatFooter = ({ messText, setMessText, changed, r , setMessage, message, setChanged, setHelp}) => {
  const [name, setName] = useState('')
  const [photo, setPhoto] = useState('')
  const [rooms, setRooms] = useState([])
  const id = localStorage.getItem("id")
  const [imageUrl, setImageUrl] = useState()
  const thisMonth = new Date().getMonth()
  const thisHours = new Date().getHours()
  const thisMinutes = new Date().getMinutes()
  let month, hours, minutes
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
  const addImage = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
     setImageUrl(reader.result)
  }
    reader.readAsDataURL(file)
  } 
  const getUser = async () => {
    const result = await axios.get(`http://localhost:8080/users/${id}`)
    setName(result.data.name)
    setPhoto(result.data.photo)
  }
  const getAnotherUser = async () => {
    const result = await axios.get(`http://localhost:8080/users/${r.routingId}`)
    setRooms(result.data.rooms)
  }
  useEffect(() => {
    getUser()
    getAnotherUser()
  }, [])
  const sendMessage = async () => {
    await axios.post("http://localhost:8080/messages/addMessageToRoom", {
      text: messText,
      time: hours + ':' + minutes,
      date: new Date().getDate().toString() + ' ' + month,
      src: imageUrl,
      name: name,
      routingId: id,
      photo: photo,
      searchId: Math.floor(Math.random() * 100000000).toString(),
      roomId: r.id,
      roomId2: room2.id
     })
    setMessText('')
    setImageUrl('')
  }
  const room2 = [...rooms].find(room => room.routingId === id)
  const changeMessage = async () => {
    const message2 = room2.messages.find(m => m.searchId === message.searchId)
    await axios.post("http://localhost:8080/messages/changeMessageFromRoom", {
      id: message.id,
      id2: message2.id,
      text: messText,
     })
    setMessage()
    setChanged(false)
    setMessText('')
    setHelp(message.isHelped = false)
  }
  return (  
      <div className="chat__footer__input">
      <input onChange={e => setMessText(e.target.value)} onKeyPress={(e) => {
        if (e.key === 'Enter' && changed == false) {
          sendMessage()
        } else if (e.key === 'Enter' && changed == true) {
         changeMessage()
        }
      }} value={messText} className="chat__footer__input__input" placeholder="Напишите сообщение..." />
      <div className="chat__footer__input__block">
        <div className="chat__footer__input__block__photo">
          <MdOutlinePhotoCamera className="chat__footer__input__block__photo__file" size={20} color='gray'/>
          <input type='file' onChange={addImage}/>
        </div>
        <FaArrowRight onClick={() => {
          if (changed == false) {
            sendMessage()
          } else {
            changeMessage()
          }
        }} cursor={'pointer'} color='gray' className="chat__footer__input__block__do"/>
      </div>
    </div>
  )
}

export default InputChatFooter