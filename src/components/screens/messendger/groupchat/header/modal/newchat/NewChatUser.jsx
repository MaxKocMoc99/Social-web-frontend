import { IoMdCheckmark } from 'react-icons/io'
import {useState } from 'react'
const NewChatUser = ({room, chosenUsers, setChosenUsers, r}) => {
  const [check, setChek] = useState('chat__addmodal__createchat__newchat__user__checkbox')
    return (
      <button className="chat__addmodal__createchat__newchat__user" onClick={() => {
            if (check == 'chat__addmodal__createchat__newchat__user__checkbox' && !r.users.find(u => u == room.routingId)) {
              setChek('chat__addmodal__createchat__newchat__user__checkbox-done')
              setChosenUsers(prev => [...prev, room.routingId])
            } else {
              setChek('chat__addmodal__createchat__newchat__user__checkbox')
              setChosenUsers([...chosenUsers].filter(u => u != room.routingId))
        }
      }}>
        <div className="chat__addmodal__createchat__newchat__user__circle">
          {room.photo ? <img src={room.photo} alt=''/> : ''}
          </div>
        <div className="chat__addmodal__createchat__newchat__user__name">{room.name}</div>
          <div className={check}>
              <IoMdCheckmark color='white' size={20}/>
          </div>
    </button>
  )
}

export default NewChatUser