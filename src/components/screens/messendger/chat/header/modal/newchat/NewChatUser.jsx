import { IoMdCheckmark } from 'react-icons/io'
import {useState } from 'react'
const NewChatUser = ({r, chosenUsers, setChosenUsers}) => {
  const [check, setChek] = useState('chat__addmodal__createchat__newchat__user__checkbox')
    return (
      <button className="chat__addmodal__createchat__newchat__user" onClick={() => {
            if (check == 'chat__addmodal__createchat__newchat__user__checkbox') {
              setChek('chat__addmodal__createchat__newchat__user__checkbox-done')
              setChosenUsers(prev => [...prev, r.routingId])
            } else {
              setChek('chat__addmodal__createchat__newchat__user__checkbox')
              setChosenUsers([...chosenUsers].filter(u => u != r.routingId))
        }
      }}>
        <div className="chat__addmodal__createchat__newchat__user__circle">
          {r.photo ? <img alt='' src={r.photo}/> : ''}
          </div>
        <div className="chat__addmodal__createchat__newchat__user__name">{r.name}</div>
          <div className={check}>
              <IoMdCheckmark color='white' size={20}/>
          </div>
    </button>
  )
}

export default NewChatUser