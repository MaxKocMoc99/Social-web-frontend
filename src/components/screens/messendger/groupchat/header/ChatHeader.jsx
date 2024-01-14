import { useState } from "react"
import {BiSearch} from 'react-icons/bi'
import ChatBack from "./ChatBack"
import ChatButtons from "./ChatButtons"
import ChatModal from "./modal/ChatModal"
import ChatTitle from "./ChatTitle"
import ChatAddModal from './modal/ChatAddModal'
import ChatInfoModal from "./modal/chatinfomodal/ChatInfoModal"
const ChatHeader = ({setValue, value, r, search, setSearch}) => {
  const [chatModal, setChatModal] = useState('none')
  const [chatModalAdd, setChatModalAdd] = useState('none')
  const [chatInfoModal, setChatInfoModal] = useState(false)
  return (
    <>
    <div className="chat__header">
      {search == false ? 
      <>
       <ChatBack />
          <ChatTitle  r={r}/>
      <ChatButtons  setChatInfoModal={setChatInfoModal} r={r} chatModal={chatModal} setChatModal={setChatModal}/>
      <ChatModal setSearch={setSearch} setChatModal={setChatModal} chatModal={chatModal} setChatModalAdd={setChatModalAdd} chatModalAdd={chatModalAdd}/> 
      <ChatAddModal r={r} setChatModalAdd={setChatModalAdd} chatModalAdd={chatModalAdd}/>
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
      {chatInfoModal && <ChatInfoModal r={r} setChatInfoModal={setChatInfoModal}/>}
      </>
  )
}

export default ChatHeader