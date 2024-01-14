import {RxCross2} from 'react-icons/rx'
import { WrapperContext } from '../../../../../../context/Wrapper'
import { useContext } from 'react'
const ChangeAddModalHeader = ({ setAddModal }) => {
    const {setWrapper} = useContext(WrapperContext)
  return (
      <div className="add__modal__header">
          <p>Добавление обложки</p>
      <RxCross2 onClick={() => {
              setAddModal('none')
              setWrapper('wrapper')
          }} cursor={'pointer'} color='gray' size={24} />
      </div>
  )
}

export default ChangeAddModalHeader