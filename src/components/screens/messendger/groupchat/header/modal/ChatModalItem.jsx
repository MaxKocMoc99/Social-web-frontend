import { MdOutlinePhotoCamera } from 'react-icons/md'
import { IoIosArrowForward } from 'react-icons/io'
import {Link} from 'react-router-dom'
const ChatModalItem = ({chat}) => {
  return (
    <Link className="chat__addmodal__item">
      <div className="chat__addmodal__item__container">
      <div className="chat__addmodal__item__container__circle">
        <MdOutlinePhotoCamera size={20} color='gray'/>
      </div>
      <div className="chat__addmodal__item__container__text">
        <p className="chat__addmodal__item__container__text__title">{chat.name}</p>
        <p className="chat__addmodal__item__container__text__number">{chat.users.length}</p>
      </div>
      <IoIosArrowForward className="chat__addmodal__item__container__to" color='gray' size={24}/>
      </div>
    </Link>
  )
}

export default ChatModalItem