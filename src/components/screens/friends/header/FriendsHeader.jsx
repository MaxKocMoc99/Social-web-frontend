import FriendsHeaderButtons from "./FriendsHeaderButtons"
const FriendsHeader = ({setIsFriends, friends}) => {
  return (
      <div className="friends__header">
          <FriendsHeaderButtons friends={friends} setIsFriends={setIsFriends}/>
    </div>
  )
}

export default FriendsHeader