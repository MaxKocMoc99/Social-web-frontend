import ChangeAddModalHeader from "./ChangeAddModalHeader"
import ChangeAddModalMain from "./ChangeAddModalMain"
const ChangeAddModal = ({addModal, setAddModal, setChangeModal}) => {
  return (
      <div className={addModal}>
          <ChangeAddModalHeader setAddModal={setAddModal}/>
      <ChangeAddModalMain setChangeModal={setChangeModal} setAddModal={setAddModal}/>
      </div>
  )
}

export default ChangeAddModal