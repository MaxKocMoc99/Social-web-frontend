import { useContext } from "react"
import { WrapperContext } from "../../../../context/Wrapper"
import {RxCross2} from 'react-icons/rx'
const MoreModalHeader = ({ setMoreModal }) => { 
    const {setWrapper} = useContext(WrapperContext)
  return (
      <div className="mainmypage__more__header">
          <p>Подробная информация</p>
          <RxCross2 onClick={() => {
              setMoreModal(false)
              setWrapper('wrapper')
          }} cursor={'pointer'} color='gray' size={24} />
      </div>
  )
}

export default MoreModalHeader