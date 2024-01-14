import { Link } from "react-router-dom"
const ChatTitle = ({r}) => {
  return (
      <Link to={`/${r.routingId}`} className="chat__header__title__title">{r.name} {r.surname}</Link>
  )
}

export default ChatTitle