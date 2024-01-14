import { Link } from "react-router-dom"
const MessengerItem = ({ r, id }) => {
  return (
      <Link to={`/im${id}/chat${r.id}`} className="mainmessendger__item">
      <div className="mainmessendger__item__circle">
        {r.photo ? <img alt="" src={r.photo}/>  : ''}
      </div>
      <div className="mainmessendger__item__name">{r.name}</div>
      <div className="mainmessendger__item__date">
        {r.messages.length ? r.messages.at(-1).date : ''}
      </div>
      </Link>
  )
}

export default MessengerItem