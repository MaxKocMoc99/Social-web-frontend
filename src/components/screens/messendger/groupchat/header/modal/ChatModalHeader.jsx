import { RxCross1 } from 'react-icons/rx'
import { WrapperContext } from '../../../../../context/Wrapper'
import { useContext } from 'react'
const ChatModalHeader = ({ setChatModalAdd}) => {
  const {setWrapper} = useContext(WrapperContext)
  return (
      <div className="chat__addmodal__header">
          <p>Выбор собеседников</p>
          <RxCross1 onClick={() => {
        setChatModalAdd('none')
        setWrapper('wrapper')
          }} size={18} cursor={'pointer'}/>
    </div>
  )
}

export default ChatModalHeader