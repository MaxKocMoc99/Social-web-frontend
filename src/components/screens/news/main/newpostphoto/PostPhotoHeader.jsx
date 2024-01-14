import { RxCross2 } from 'react-icons/rx'
import { useContext } from 'react'
import { WrapperContext } from '../../../../context/Wrapper'
const PostPhotoHeader = ({ setPhotoModal }) => {
  const {setWrapper} = useContext(WrapperContext)
  return (
      <div className="photo__modal__header">
          <p>Прикрепление фотографии</p>
          <RxCross2 onClick={() => {
        setPhotoModal('none')
        setWrapper('wrapper')
         }} cursor={'pointer'} color='gray' size={24}/>
    </div>
  )
}

export default PostPhotoHeader