import ChangeAddModalHeader from "./ChangeAddModalHeader"
import ChangeAddModalMain from "./ChangeAddModalMain"
const ChangeAddModal = ({addModal, setAddModal, setChangeModal, g}) => {
  return (
      <div className={addModal}>
          <ChangeAddModalHeader setAddModal={setAddModal}/>
      <ChangeAddModalMain g={g} setChangeModal={setChangeModal} setAddModal={setAddModal}/>
      </div>
  )
}

export default ChangeAddModal