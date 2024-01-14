import CommunitiesHeaderButtons from "./CommunitiesHeaderButtons"
const CommutitiesHeader = ({setIsMyCommunities, myGroups, subscribedGroups}) => {
  return (
      <div className="communities__header">
      <CommunitiesHeaderButtons myGroups={myGroups} subscribedGroups={subscribedGroups} setIsMyCommunities={setIsMyCommunities}/>
      </div>
  )
}

export default CommutitiesHeader