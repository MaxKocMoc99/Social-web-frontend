import { WrapperContext } from '../../../../../../context/Wrapper'
import { useContext } from 'react'
import axios from 'axios'
const ChangeRemoveFooter = ({ setRemoveModal, g}) => {
  const {setWrapper} = useContext(WrapperContext)
  return (
      <div className="remove__modal__footer">
          <button className="remove__modal__footer__cancel" onClick={() => {
        setRemoveModal('none')
        setWrapper('wrapper')
          }}>Отмена</button>
          <button onClick={async () => {
        setRemoveModal('none')
        setWrapper('wrapper')
        await axios.post("http://localhost:8080/myGroups/changeBackground", {
          id: g.id,
          photo: '',
          groupId: g.routingId
        })
          }} className="remove__modal__footer__remove">Удалить</button>
    </div>
  )
}

export default ChangeRemoveFooter