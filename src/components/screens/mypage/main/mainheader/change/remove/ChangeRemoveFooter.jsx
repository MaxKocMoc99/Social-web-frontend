import { WrapperContext } from '../../../../../../context/Wrapper'
import { useContext } from 'react'
import axios from 'axios'
const ChangeRemoveFooter = ({ setRemoveModal}) => {
  const { setWrapper } = useContext(WrapperContext)
  const id = localStorage.getItem("id")
  return (
      <div className="remove__modal__footer">
          <button className="remove__modal__footer__cancel" onClick={() => {
        setRemoveModal('none')
        setWrapper('wrapper')
          }}>Отмена</button>
          <button onClick={async () => {
        setRemoveModal('none')
        setWrapper('wrapper')
        await axios.post("http://localhost:8080/users/changeBackground", {
          id: id,
          photo: ''
        })
          }} className="remove__modal__footer__remove">Удалить</button>
    </div>
  )
}

export default ChangeRemoveFooter