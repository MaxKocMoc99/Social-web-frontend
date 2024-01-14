import { useContext } from 'react'
import {RxCross1} from 'react-icons/rx'
import { WrapperContext } from '../../../../../context/Wrapper'
const MainSendHeader = ({ setModal}) => {
    const {setWrapper} = useContext(WrapperContext)
    return (
      <div className="main__post__send__header">
          <p>Поделиться</p>
          <RxCross1 onClick={() => { 
                setModal('none')
          setWrapper('wrapper')
          }} size={24} cursor='pointer'/>
    </div>
  )
}

export default MainSendHeader