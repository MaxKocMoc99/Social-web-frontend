import { Link } from "react-router-dom"
import FriendsUserItemButtons from "./FriendsUserItemButtons"
const FriendsUserItem = ({f}) => {
  return (
      <div className="friends__items__item__user">
      <Link className="friends__items__item__user__name" to={`/${f.routingId}`}>{f.name} {f.surname}</Link>
      <FriendsUserItemButtons f={f}/>
    </div>
  )
}

export default FriendsUserItem