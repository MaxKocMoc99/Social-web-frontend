import { TbPhoto } from 'react-icons/tb'
import axios from 'axios'
const ChatInfoModalUpdatePhoto = ({ r }) => {
    const addImage = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.onloadend = async () => {
            await axios.post("http://localhost:8080/groupRooms/changeGroupRoomPhoto", {
                id: r.routingId,
                photo: reader.result
         })
      }
        reader.readAsDataURL(file)
      } 
  return (
      <div className="chat__header__chat-info__main__update" onClick={() => {

      }}>
          <TbPhoto color='blue' size={22}/>
          <p>Загрузить фотографию</p>
          <input onChange={addImage} type='file'/>
      </div>
  )
}

export default ChatInfoModalUpdatePhoto