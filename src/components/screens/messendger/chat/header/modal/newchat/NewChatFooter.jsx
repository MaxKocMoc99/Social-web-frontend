import { useContext } from 'react'
import {MdOutlinePhotoCamera} from  'react-icons/md'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { WrapperContext } from '../../../../../../context/Wrapper'
const NewChatFooter = ({chosenUsers , value, setValue , chatPhoto, addImage}) => {
  const { setWrapper } = useContext(WrapperContext)
  const id = localStorage.getItem("id")
  return (
      <div className="chat__addmodal__createchat__newchat__footer">
          <div className="chat__addmodal__createchat__newchat__footer__circle">
              <MdOutlinePhotoCamera color='gray' size={24} />
        <input type='file' onChange={addImage}/>
          </div>
          <input placeholder='Введите название чата' value={value} onChange={e => setValue(e.target.value)} className="chat__addmodal__createchat__newchat__footer__input" />
      <Link to={`/im${id}`} className="chat__addmodal__createchat__newchat__footer__button" onClick={async () => {
        if (value) {
         await axios.post("http://localhost:8080/groupRooms/createNewGroupRoom", {
            name: value,
            photo: chatPhoto,
            routingId: (Math.floor(Math.random() * 100000000)).toString(),
            usersIds: chosenUsers
         })
        }
        setWrapper('wrapper')
          }}>Создать чат</Link>
    </div>
  )
}

export default NewChatFooter