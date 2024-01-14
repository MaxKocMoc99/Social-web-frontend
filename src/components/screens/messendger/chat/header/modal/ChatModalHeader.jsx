import { RxCross1 } from 'react-icons/rx'
import { WrapperContext } from '../../../../../context/Wrapper'
import { useContext } from 'react'
const ChatModalHeader = ({ setChatModalAdd, r }) => {
  const {setWrapper} = useContext(WrapperContext)
  return (
      <div className="chat__addmodal__header">
          <p>Добавить {r.name} в чат</p>
          <RxCross1 onClick={() => {
        setChatModalAdd('none')
        setWrapper('wrapper')
          }} size={18} cursor={'pointer'}/>
    </div>
  )
}

export default ChatModalHeader