import axios from 'axios'
import {AiOutlinePlusCircle, AiOutlineCheck} from 'react-icons/ai'
const CommunitiesSearchItemSubscribe = ({ g, subscribedGroups, id }) => {
  const isSubscribedGroup = [...subscribedGroups].find(group => group.routingId === g.id)
  return (
      <button className="communities__search-items__subscribe" onClick={async () => {
    if (isSubscribedGroup) {
      await axios.post("http://localhost:8080/subscribedGroups/unsubscribeGroup", {
            id: g.id,
            userId: id
          })
      } else {
        await axios.post("http://localhost:8080/subscribedGroups/subscribeGroup", {
            id: id,
            name: g.name, 
            type: g.type,
            routingId: g.id,
            photo: g.photo, 
            subscribers: g.users.length
          })
      }
      }}> 
      {isSubscribedGroup ? <AiOutlineCheck color='gray' size={20} /> : <AiOutlinePlusCircle color='blue' size={20} />}
    </button>
  )
}

export default CommunitiesSearchItemSubscribe