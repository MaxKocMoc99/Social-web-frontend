import { Link } from "react-router-dom"
const ChatChatUserInfo = ({ m}) => {
  return (
    <div className="chat__main__item__data">
      <div className="chat__main__item__data__block">
        <Link to={`/${m.routingId}`} className="chat__main__item__data__block__name">{m.name}</Link>
        <p className="chat__main__item__data__block__date">{m.time}</p>
      </div>
       <div className="chat__main__item__data__text">{m.text}</div>
      {m.src ? <img className="chat__main__item__data__img" src={m.src} alt="" /> : ''}
    </div>
  )
}

export default ChatChatUserInfo