import axios from "axios"
import { useContext } from "react"
import { WrapperContext } from "../../../../../context/Wrapper"
const UpdatePhotoMain = ({setUpdatePhoto}) => {
  const { setWrapper } = useContext(WrapperContext)
  const id = localStorage.getItem("id")
  const updatePhoto = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onloadend = async () => {
      await axios.post("http://localhost:8080/users/changePhoto", {
        id: id,
        photo: reader.result
      })
  }
    reader.readAsDataURL(file)
    setUpdatePhoto(false)
    setWrapper('wrapper')
  } 
  return (
      <div className="mainmypage__photo-update__main">
          <p>
          Друзьям будет проще узнать вас, если вы загрузите свою настоящую фотографию. <br/>
Вы можете загрузить изображение в формате JPG, GIF или PNG.
          </p>
      <button>
        <p>Выбрать файл</p>
          <input type='file' onChange={updatePhoto}/>
          </button>
    </div>
  )
}

export default UpdatePhotoMain