import { useContext } from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import { WrapperContext } from '../../../../context/Wrapper'
const ChatButtons = ({ chatModal, setChatModal, r, setChatInfoModal }) => {
  const {setWrapper} = useContext(WrapperContext)
  return (
      <div className="chat__header__buttons">
      <FiMoreHorizontal className='chat__header__buttons__more' onClick={() => {
        if (chatModal == 'none') {
          setChatModal('chat__modal')
        } else {
          setChatModal('none')
      }
                    }} color='gray' size={24}/>
      <div className="chat__header__buttons__circle" onClick={() => {
        setChatInfoModal(true)
        setWrapper('darkwrapper')
      }}>
        {r.photo ? <img alt='' src={r.photo}/> : ''}
        </div>
    </div>
  )
}

export default ChatButtons