import { useContext } from "react"
import { WrapperContext } from "../../../../../context/Wrapper"
import { RxCross2 } from "react-icons/rx"
const UpdatePhotoHeader = ({setUpdatePhoto}) => {
    const {setWrapper} = useContext(WrapperContext)
  return (
    <div className="mainmypage__photo-update__header">
           <p>Загрузка новой фотографии</p>
      <RxCross2 onClick={() => {
        setUpdatePhoto(false)
        setWrapper('wrapper')
          }} cursor={'pointer'} color='gray' size={24} />
    </div>
  )
}

export default UpdatePhotoHeader