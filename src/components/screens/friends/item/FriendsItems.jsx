import { useMemo} from "react"
import FriendsItem from "./FriendsItem"
const FriendsItems = ({value, friends}) => {
  const sortedFriends = useMemo(() => {
    return [...friends].filter(f => f.name.includes(value))
  }, [value, friends])
  return (
    <div className="friends__items">
      {sortedFriends.map(f => (
        <FriendsItem f={f}/>
        ))}
      </div>
  )
}

export default FriendsItems