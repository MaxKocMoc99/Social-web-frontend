import { MdOutlinePhotoCamera } from 'react-icons/md'
import { IoIosArrowForward } from 'react-icons/io'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { WrapperContext } from '../../../../../context/Wrapper'
import axios from 'axios'
const ChatModalItem = ({ chat, r}) => {
  const {setWrapper} = useContext(WrapperContext)
  const id = localStorage.getItem("id")
  return (
    <Link className="chat__addmodal__item" to={`/im${id}/chat${chat.id}`} onClick={async () => {
      if (!chat.users.find(u => u == r.routingId)) {
        await axios.post("http://localhost:8080/groupRooms/addNewUserToGroupRoom", {
          userId: r.routingId, 
          routingId: chat.routingId,
          name: chat.name,
          photo: chat.photo,
          groupRoomUsersIds: chat.users
        })
      }
      setWrapper('wrapper')
    }}>
      <div className="chat__addmodal__item__container">
        <div className="chat__addmodal__item__container__circle">
          {chat.photo ? <img src={chat.photo} alt=''/> : <MdOutlinePhotoCamera size={20} color='gray'/>}
      </div>
      <div className="chat__addmodal__item__container__text">
        <p className="chat__addmodal__item__container__text__title">{chat.name}</p>
        <p className="chat__addmodal__item__container__text__number">{chat.users.length} участников</p>
      </div>
      <IoIosArrowForward className="chat__addmodal__item__container__to" color='gray' size={24}/>
      </div>
    </Link>
  )
}

export default ChatModalItem