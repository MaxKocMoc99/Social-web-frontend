import { Link } from "react-router-dom"
import FriendsSearchUserItemButtons from "./FriendsSearchUserItemButtons"
const FriendsSearchUserItem = ({u, friends, id}) => {
  return (
      <div className="friends__search-users__item__user">
      <Link className="friends__search-users__item__user__name" to={`/${u.id}`}>{u.name} {u.surname}</Link>
      <FriendsSearchUserItemButtons id={id} friends={friends} u={u}/>
    </div>
  )
}

export default FriendsSearchUserItem