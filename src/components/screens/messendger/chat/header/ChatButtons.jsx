import { FiMoreHorizontal } from 'react-icons/fi'
import {Link} from 'react-router-dom'
const ChatButtons = ({ chatModal, setChatModal, r }) => {
  return (
      <div className="chat__header__buttons">
      <FiMoreHorizontal className='chat__header__buttons__more' onClick={() => {
        if (chatModal == 'none') {
          setChatModal('chat__modal')
        } else {
          setChatModal('none')
      }
                    }} color='gray' size={24}/>
      <Link to={`/${r.routingId}`} className="chat__header__buttons__circle">
        {r.photo ? <img alt='' src={r.photo}/> : ''}
        </Link>
    </div>
  )
}

export default ChatButtons