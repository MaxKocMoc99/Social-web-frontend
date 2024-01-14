import { Link } from "react-router-dom"
import {IoIosArrowBack} from 'react-icons/io'
const ChatBack = () => {
  const id = localStorage.getItem("id")
  return (
      <Link to={`/im${id}`} className="chat__header__back">
                    <IoIosArrowBack color="gray" size={24}/>
       <p className="chat__header__back__text"> Назад</p>
   </Link>
  )
}

export default ChatBack