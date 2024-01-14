import {useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import axios from 'axios'
const MainCommentsCreate = ({post, photo, name, surname}) => {
  const [commText, setCommText] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const thisHours = new Date().getHours()
  const thisMinutes = new Date().getMinutes()
  const id = localStorage.getItem("id")
  let hours, minutes
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
  const shareComment = async () => {
    await axios.post("http://localhost:8080/comments/addPostComment", {
      name: name + ' ' + surname,
      text: commText,
      time: hours + ':' + minutes,
      src: imageUrl,
      postId: post.id,
      photo: photo,
      routingId: id
     })
    setCommText('')
    setImageUrl('')
  }
    return (
         <div className="main__post__comments">
        <div>
        {photo ? <img src={photo} alt=""/> : ''}
          </div>
        <input placeholder='Написать комментарий...' value={commText} onChange={e => setCommText(e.target.value)} onKeyPress={(e) => {
          if (e.key === 'Enter') {
            shareComment()
          }
        }}/>
        <FaArrowRight cursor={'pointer'} size={20} color='gray' onClick={() => {
          shareComment()
          }}/>
        </div>
  )
}

export default MainCommentsCreate