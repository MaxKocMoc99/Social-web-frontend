import { Link } from "react-router-dom"
import UsersSearchItemInfo from "./UsersSearchItemInfo"
import UsersSearchItemSubscribe from "./UsersSearchItemSubscribe"
const UsersSearchItems = ({ u, friends, subscribedUsers, id, surname, photo, name}) => {
  return (
    <Link to={`/${u.id}`} className="users__search-item" style={{cursor: 'pointer'}}>
      <div className="users__search-item__circle">
         {u.photo ? <img src={u.photo} alt='' /> : ''} 
    </div>
    <UsersSearchItemInfo u={u} />
    <UsersSearchItemSubscribe friends={friends} id={id} surname={surname} photo={photo} name={name} subscribedUsers={subscribedUsers} u={u} />
</Link>
  )
}

export default UsersSearchItems