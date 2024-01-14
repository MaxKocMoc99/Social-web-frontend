import { ImPencil } from 'react-icons/im'
const ChangeBackButton = ({ changeModal, setChangeModal }) => {
  return (
      <button className="mainmypage__header__change__button" onClick={() => {
          if (changeModal == 'none') {
            setChangeModal('mainmypage__header__change__modal')
          } else {
            setChangeModal('none')
          }
    }}>
    <ImPencil/>
    <p>Изменить обложку</p>
      </button>
  )
}

export default ChangeBackButton