import { useContext } from "react"
import { RxCross1 } from "react-icons/rx"
import { WrapperContext } from "../../../../../../context/Wrapper"
const ChatInfoModalHeader = ({setChatInfoModal}) => {
    const {setWrapper} = useContext(WrapperContext)
  return (
      <div className="chat__header__chat-info__header">
             <p>Информация</p>
          <RxCross1 onClick={() => { 
          setChatInfoModal(false)
          setWrapper('wrapper')
          }} size={24} cursor='pointer'/>
    </div>
  )
}

export default ChatInfoModalHeader