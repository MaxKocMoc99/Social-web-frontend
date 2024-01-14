import { RxCross1 } from 'react-icons/rx'
import { IoIosArrowBack } from 'react-icons/io'
import { WrapperContext } from '../../../../../../context/Wrapper'
import { useContext } from 'react'
const NewChatHeader = ({setNewChat, setChatModalAdd}) => {
    const {setWrapper} = useContext(WrapperContext)
  return (
      <div className="chat__addmodal__createchat__newchat__header">
          <button className="chat__addmodal__createchat__newchat__header__back" onClick={() => {
              setChatModalAdd('chat__addmodal')
              setNewChat('none')
          }}>
          <IoIosArrowBack color="gray" size={24}/>
           <p>Назад</p>
          </button>
          <div  className="chat__addmodal__createchat__newchat__header__title">Создать чат</div>
          <RxCross1 cursor={'pointer'} size={20} onClick={() => {
              setWrapper('wrapper')
              setNewChat('none')
          }}/>
      </div>
  )
}

export default NewChatHeader