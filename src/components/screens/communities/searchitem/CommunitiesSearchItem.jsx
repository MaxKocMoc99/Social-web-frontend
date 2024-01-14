import { Link } from "react-router-dom"
import CommunitiesSearchItemInfo from "./CommunitiesSearchItemInfo"
import CommunitiesSearchItemSubscribe from "./CommunitiesSearchItemSubscribe"
const CommunitiesSearchItem = ({g, subscribedGroups, id}) => {
  return (
    <Link to={`/${g.id}`} className="communities__search-items" style={{cursor: 'pointer'}}>
      <div className="communities__search-items__circle">
        {g.photo ? <img src={g.photo} alt=''/> : ''}
          </div>
          <CommunitiesSearchItemInfo g={g} />
          <CommunitiesSearchItemSubscribe id={id} subscribedGroups={subscribedGroups} g={g} />
  </Link>
  )
}

export default CommunitiesSearchItem