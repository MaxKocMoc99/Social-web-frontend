import ChangeRemoveFooter from "./ChangeRemoveFooter"
import ChangeRemoveHeader from "./ChangeRemoveHeader"

const ChangeRemoveModal = ({removeModal, setRemoveModal, g}) => {
  return (
      <div className={removeModal}>
          <ChangeRemoveHeader setRemoveModal={setRemoveModal} />
          <p>Вы уверены, что хотите удалить обложку?</p>
          <ChangeRemoveFooter g={g} setRemoveModal={setRemoveModal}/>
    </div>
  )
}

export default ChangeRemoveModal