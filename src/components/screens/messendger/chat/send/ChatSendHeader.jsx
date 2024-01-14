import { RxCross2 } from 'react-icons/rx'
import { WrapperContext } from '../../../../context/Wrapper'
import { useContext } from 'react'
const ChatSendHeader = ({setSendChat}) => {
    const {setWrapper} = useContext(WrapperContext)
  return (
      <div className="chat__send__header">
          <p>Переслать сообщение</p>
           <RxCross2 onClick={() => {
        setSendChat(false)
        setWrapper('wrapper')
          }} cursor={'pointer'} color='gray' size={24} />
      </div>
  )
}

export default ChatSendHeader