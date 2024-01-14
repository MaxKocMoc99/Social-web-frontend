import { useContext } from "react"
import { Link } from "react-router-dom"
import { WrapperContext } from "../../../../../../context/Wrapper"
import axios from "axios"
const ChatInfoModalFooter = ({r}) => {
  const {setWrapper} = useContext(WrapperContext)
  const id = localStorage.getItem("id")
  return (
    <Link to={`/im${id}`} className="chat__header__chat-info__footer" onClick={async () => {
      axios.post("http://localhost:8080/groupRooms/deleteGroupRoom", {
        id: r.id,
        routingId: r.routingId,
        userId: id,
       })
      setWrapper('wrapper')
      }}>
          Выйти из чата
    </Link>
  )
}

export default ChatInfoModalFooter