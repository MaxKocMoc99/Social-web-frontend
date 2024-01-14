import { AiOutlineSearch } from 'react-icons/ai'
import { BiMessageRoundedAdd } from 'react-icons/bi'
import { WrapperContext } from '../../../../../context/Wrapper'
import { useContext } from 'react'
const ChatModal = ({ chatModal, setChatModalAdd, setChatModal , setSearch}) => {
  const {setWrapper} = useContext(WrapperContext)
  return (
      <div className={chatModal}>
      <button className="chat__modal__item" onClick={() => {
        setChatModal('none')
          setSearch(true)
      }}> 
              <AiOutlineSearch color='gray' size={20}/>
              <p>Поиск по истории сообщений</p>
          </button>
      <button className="chat__modal__item" onClick={() => {
        setWrapper('darkwrapper')
        setChatModalAdd('chat__addmodal')
        setChatModal('none')
          }}>
              <BiMessageRoundedAdd color='gray' size={20}/>
          <p>Добавить в чат</p>
          </button>
    </div>
  )
}

export default ChatModal