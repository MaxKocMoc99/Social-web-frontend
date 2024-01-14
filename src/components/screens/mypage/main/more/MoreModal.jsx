import MoreModalHeader from "./MoreModalHeader"
import MoreModalMain from "./MoreModalMain"
const MoreModal = ({setMoreModal, birth, city, myGroupsLength, friendsLength}) => {
  return (
      <div className="mainmypage__more">
      <MoreModalHeader setMoreModal={setMoreModal} />
      <MoreModalMain myGroupsLength={myGroupsLength} friendsLength={friendsLength} birth={birth} city={city}/>
      </div>
  )
}

export default MoreModal