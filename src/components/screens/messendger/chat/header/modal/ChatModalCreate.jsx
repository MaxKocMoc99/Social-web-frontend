import { AiOutlinePlus } from 'react-icons/ai'
const ChatModalCreate = ({ setChatModalAdd, setNewChat}) => {
    return (
      <div className="chat__addmodal__createchat">
          <button className="chat__addmodal__createchat__create" onClick={() => {
                setChatModalAdd('none')
               setNewChat('chat__addmodal__createchat__newchat')
          }}>
          <AiOutlinePlus color='blue' size={20} />
          </button>
          <button onClick={() => {
                setChatModalAdd('none')
               setNewChat('chat__addmodal__createchat__newchat')
          }} className="chat__addmodal__createchat__text">
              Создать новый чат
          </button>
        </div>
  )
}

export default ChatModalCreate