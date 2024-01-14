import { MdOutlinePhotoCamera} from 'react-icons/md'
import { useContext, useState } from 'react'
import { WrapperContext } from '../../../context/Wrapper'
import NewPostPhoto from './newpostphoto/NewPostPhoto'
import axios from 'axios'
const NewPost = ({userPhoto, name, surname, id}) => {
  const [photoModal, setPhotoModal] = useState('none')
  const [imageUrl, setImageUrl] = useState()
  const [text, setText] = useState('')
  const { setWrapper} = useContext(WrapperContext)
  let hours, minutes
  const thisHours = new Date().getHours()
  const thisMinutes = new Date().getMinutes()
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
  const doPost = async () => {
    await axios.post("http://localhost:8080/posts/addUserPost", {
      name: name + ' ' + surname,
      time: hours + ':' + minutes,
      text: text,
      img: imageUrl,
      circleImage: userPhoto,
      routingId: id,
      id: id
    })
    setImageUrl('')
    setText('')
  }
  return (
      <div className="main__newpost">
      <div className="main__newpost__circle">
        {userPhoto ? <img src={userPhoto} alt=''/> : ''}
          </div>
      <input onKeyPress={(e) => {
        if (e.key === 'Enter') {
          doPost()
        }
          }} value={text} onChange={e => setText(e.target.value)} className="main__newpost__input" placeholder="Что у вас нового?" />
      <div className="main__newpost__buttons">
        <button className="main__newpost__buttons__do" onClick={() => doPost()}>Опубликовать</button>
        <MdOutlinePhotoCamera onClick={() => {
          setPhotoModal('photo__modal')
          setWrapper('darkwrapper')
              }} color='gray' cursor={'pointer'} size={20}/>
      </div>
      <NewPostPhoto setImageUrl={setImageUrl} setPhotoModal={setPhotoModal} photoModal={photoModal} />
    </div>
  )
}

export default NewPost