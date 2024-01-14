import { useState } from "react"
import {BiSearch} from 'react-icons/bi'
import ChatBack from "./ChatBack"
import ChatButtons from "./ChatButtons"
import ChatModal from "./modal/ChatModal"
import ChatTitle from "./ChatTitle"
import ChatAddModal from './modal/ChatAddModal'
import NewChat from "./modal/newchat/NewChat"
const ChatHeader = ({setValue, value, r, search, setSearch}) => {
  const [chatModal, setChatModal] = useState('none')
  const [chatModalAdd, setChatModalAdd] = useState('none')
  const [newChat, setNewChat] = useState('none')
  return (
    <div className="chat__header">
      {search == false ? 
      <>
       <ChatBack />
          <ChatTitle  r={r}/>
      <ChatButtons  r={r} chatModal={chatModal} setChatModal={setChatModal}/>
      <ChatModal setSearch={setSearch} setChatModal={setChatModal} chatModal={chatModal} setChatModalAdd={setChatModalAdd} chatModalAdd={chatModalAdd}/> 
      <ChatAddModal r={r} setChatModalAdd={setChatModalAdd} chatModalAdd={chatModalAdd} setNewChat={setNewChat}/>
          <NewChat setChatModalAdd={setChatModalAdd} newChat={newChat} setNewChat={setNewChat} />
        </> : <div className="chat__header__search">
          <BiSearch size={18} color="gray"/>
          <input placeholder="Поиск по истории сообщений" onChange={e => setValue(e.target.value)} value={value}/>
          <div className="chat__header__search__buttons">
            <button className="chat__header__search__buttons__search">Поиск</button>
            <button className="chat__header__search__buttons__cancel" onClick={() => {
              setValue('')
              setSearch(false)
            }}>Отмена</button>
          </div>
          </div>} 
      </div>
  )
}

export default ChatHeader