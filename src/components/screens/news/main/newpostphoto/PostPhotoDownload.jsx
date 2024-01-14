import { useContext } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import { WrapperContext } from '../../../../context/Wrapper'
const PostPhotoDownload = ({ setImageUrl, setPhotoModal }) => {
  const {setWrapper} = useContext(WrapperContext)
  const addImage = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
     setImageUrl(reader.result)
  }
    reader.readAsDataURL(file)
  }
  return (
    <button onClick={() => {
      setPhotoModal('none')
      setWrapper('wrapper')
    }
    } className="photo__modal__download">
          <AiOutlinePlus size={20}/>
          <p>Загрузить фотографию</p>
          <input type='file' onChange={addImage}/>
    </button>
  )
}

export default PostPhotoDownload