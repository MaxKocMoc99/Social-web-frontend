import { Link } from "react-router-dom"
const CommunitiesItemInfo = ({g}) => {
  return (
      <div className="communities__items__info">
      <Link to={`/${g.id}`}>{g.name}</Link>
      <p>{g.type}</p>
      <p>{g.users.length}</p>
    </div>
  )
}

export default CommunitiesItemInfo