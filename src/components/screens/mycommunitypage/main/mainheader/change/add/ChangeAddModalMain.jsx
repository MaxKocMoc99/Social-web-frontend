import ChangeAddModalMainDownload from "./download/ChangeAddModalMainDownload"
const ChangeAddModalMain = ({setAddModal, setChangeModal, g}) => {
  return (
      <div className="add__modal__main">
          <p>Обложка профиля</p>
          <p>Обложка будет отображаться на мобильном устройстве, <br /> планшете и десктопной версии.</p>
      <ChangeAddModalMainDownload setChangeModal={setChangeModal} setAddModal={setAddModal} g={g}/>
    </div>
  )
}

export default ChangeAddModalMain