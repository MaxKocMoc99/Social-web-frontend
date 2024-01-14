import { useContext } from 'react'
import {SlPencil} from 'react-icons/sl'
import { WrapperContext } from '../../../../context/Wrapper'
const PhotoModal = ({ setUpdatePhoto, setPhoto }) => {
  const {setWrapper} = useContext(WrapperContext)
  return (
      <div className="mainmypage__photo" onMouseLeave={() => setPhoto(false)} onMouseEnter={() => setPhoto(true)}>
      <button onClick={() => {
        setUpdatePhoto(true)
        setWrapper('darkwrapper')
        setPhoto(false)
      }}>
              <SlPencil />
              <p>Обновить фотографию</p>
          </button>
    </div>
  )
}

export default PhotoModal