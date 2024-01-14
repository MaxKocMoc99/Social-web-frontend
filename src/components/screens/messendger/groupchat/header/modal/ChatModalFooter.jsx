import { useContext } from "react"
import { WrapperContext } from "../../../../../context/Wrapper"
import axios from 'axios'
const ChatModalFooter = ({ r, chosenUsers, setChatModalAdd }) => {
    const {setWrapper} = useContext(WrapperContext)
    return (
      <div className="chat__addmodal__footer">
          <button onClick={async () => {
          await axios.post("http://localhost:8080/groupRooms/addNewUsersToGroupRoom", {
            usersIds: chosenUsers,
            groupRoomUsersIds: r.users,
            routingId: r.routingId,
            name: r.name,
            photo: r.photo
           })
                setWrapper('wrapper')
                setChatModalAdd('none')
      }}>Добавить собеседников</button>
      </div>
  )
}

export default ChatModalFooter