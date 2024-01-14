import React, { useState } from 'react'
import ChatInfoModalUpdatePhoto from './ChatInfoModalUpdatePhoto'
const ChatInfoModalMain = ({ r }) => {
    const [updatePhoto, setUpdatePhoto] = useState(false)
  return (
      <div className="chat__header__chat-info__main">
          <div className="chat__header__chat-info__main__info">
              <div className="chat__header__chat-info__main__info__circle" onClick={() => {
                  setUpdatePhoto(prev => !prev)
              }}>
                  {r.photo ? <img src={r.photo} alt=""/> : ''}
              </div>
              <div className="chat__header__chat-info__main__info__info">
                  <p className="chat__header__chat-info__main__info__info__name">{r.name}</p>
                  <p className="chat__header__chat-info__main__info__info__count">{r.users.length} участников</p>
              </div>
          </div>
          {updatePhoto && <ChatInfoModalUpdatePhoto r={r}/>}
    </div>
  )
}

export default ChatInfoModalMain