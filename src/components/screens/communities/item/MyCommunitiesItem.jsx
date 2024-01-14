import {useState} from 'react'
import {FiMoreHorizontal} from 'react-icons/fi'
import CommunitiesItemInfo from './CommunitiesItemInfo'
import { Link } from 'react-router-dom'
import axios from 'axios'
const MyComminitiesItem = ({ g}) => {
    const [unsubscribeModal, setUnsubscribeModal] = useState(false)
  return (
    <div className="communities__items">
      <Link to={`/${g.id}`} className="communities__items__circle" >
        {g.photo ? <img src={g.photo} alt=''/> : ''}
          </Link>
      <CommunitiesItemInfo g={g}/>
        <FiMoreHorizontal onClick={() => setUnsubscribeModal(prev => !prev)} cursor={'pointer'} fontSize={26} color="gray" className="communities__items__user__more" />
      {unsubscribeModal && <div className="communities__unsubscribe">
        <button onClick={async () => {
         await axios.post("http://localhost:8080/myGroups/delete", {
           id: g.id,
           groupId: g.routingId
              })
        }
        }>
       Удалить
        </button>
         </div>}
      </div>
  )
}

export default MyComminitiesItem