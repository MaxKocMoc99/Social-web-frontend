import { Link } from "react-router-dom"
const MainComment = ({ comm , name, surname, photo}) => {
  return (
      <div className="modal__post__modalcomments__comments__comment">
      <div className="modal__post__modalcomments__comments__comment__circle">
        {photo ? <img src={photo} alt=""/> : ''}
          </div>
          <div className="modal__post__modalcomments__comments__comment__flex">
          <div className="modal__post__modalcomments__comments__comment__block">
          <Link to={'/user'} className="modal__post__modalcomments__comments__comment__block__name">{name} {surname}</Link>
        <p className="modal__post__modalcomments__comments__comment__block__date">{comm.time}</p>
      </div>
       <div className="modal__post__modalcomments__comments__comment__text">{comm.commText}</div>
      {comm.src ? <img className="modal__post__modalcomments__comments__comment__img" src={comm.src} alt="" /> : ''}
          </div>
      </div>
  )
}

export default MainComment