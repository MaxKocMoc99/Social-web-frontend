import { RxCross2 } from 'react-icons/rx'
import { WrapperContext } from '../../../../../../context/Wrapper'
import { useContext } from 'react'
const ChangeRemoveHeader = ({ setRemoveModal }) => {
  const {setWrapper} = useContext(WrapperContext)
  return (
      <div className="remove__modal__header">
           <p>Предупреждение</p>
      <RxCross2 onClick={() => {
        setRemoveModal('none')
        setWrapper('wrapper')
          }} cursor={'pointer'} color='gray' size={24} />
    </div>
  )
}

export default ChangeRemoveHeader