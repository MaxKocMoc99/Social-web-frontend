import { Link } from "react-router-dom"
import { CgProfile } from 'react-icons/cg'
import { BiNews } from 'react-icons/bi'
import { TbMessageCircle2 } from 'react-icons/tb'
import { FaUserFriends, FaUsers } from 'react-icons/fa'
import { AiOutlinePicture } from 'react-icons/ai'
import { BsBookmark } from 'react-icons/bs'
const Sidebar = () => {
  const id = localStorage.getItem("id")
  return (
      <aside className="sidebar">
          <Link to={`/${id}`} className="sidebar__ref">
              <CgProfile size={20} color="rgba(92, 152, 242, 0.941)"/>
            <p className="sidebar__ref__text"> Моя страница</p></Link>
          <Link to={'/feed'} className="sidebar__ref">
          <BiNews size={20} color="rgba(92, 152, 242, 0.941)"/>
            <p className="sidebar__ref__text">Новости</p>
          </Link>
      <Link to={`/im${id}`} className="sidebar__ref">
              <TbMessageCircle2 size={20} color="rgba(92, 152, 242, 0.941)"/>
              <p className="sidebar__ref__text">Мессенджер</p>
          </Link>
          <Link to={'/friends'} className="sidebar__ref">
              <FaUserFriends size={20} color="rgba(92, 152, 242, 0.941)"/>
              <p className="sidebar__ref__text">Друзья</p>
          </Link>
          <Link to={'/groups'} className="sidebar__ref">
              <FaUsers size={20} color="rgba(92, 152, 242, 0.941)"/>
              <p className="sidebar__ref__text">Сообщества</p></Link>
          <Link to={`/albums${id}`} className="sidebar__ref">
              <AiOutlinePicture size={20} color="rgba(92, 152, 242, 0.941)"/>
              <p className="sidebar__ref__text">Фотографии</p></Link>
          <Link  to={`/bookmarks${id}`} className="sidebar__ref">
              <BsBookmark size={20} color="rgba(92, 152, 242, 0.941)"/>
              <p className="sidebar__ref__text">Закладки</p></Link>
    </aside>
  )
}

export default Sidebar