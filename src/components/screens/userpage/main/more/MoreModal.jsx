import MoreModalHeader from "./MoreModalHeader"
import MoreModalMain from "./MoreModalMain"
const MoreModal = ({setMoreModal, u}) => {
  return (
      <div className="mainmypage__more">
      <MoreModalHeader setMoreModal={setMoreModal} />
      <MoreModalMain u={u}/>
      </div>
  )
}

export default MoreModal