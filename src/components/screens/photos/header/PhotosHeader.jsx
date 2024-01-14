import axios from "axios"
import { useState } from "react"
const PhotosHeader = ({ gallery, id}) => {
  const [imageUrl, setImageUrl] = useState()
  const addImage = (e) => {
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.onloadend = (e) => {
      setImageUrl(e.target.result)
    }
    fileReader.readAsDataURL(file)
  }
  return (
    <div className="photos__header">
      <div className="photos__header__functions">
      <div className="photos__header__functions__text" >
              <p>Мои фотографии</p>
          <p>{gallery.length}</p>
        </div>
        <div className="photos__header__functions__buttons">
          <button className="photos__header__functions__buttons__addphoto" onClick={async () => {
            if (imageUrl) {
              await axios.post("http://localhost:8080/gallery/newPhoto", {
                src: imageUrl,
                id: id
             })
              setImageUrl('')
            }
        }}>Добавить фотографию</button>
          <button className="photos__header__functions__buttons__choosephoto">
          <p> Выбрать фотографию</p>
          <input onChange={addImage} type='file'/>
        </button>
        </div>
      </div>
      <div className="photos__header__line"></div>
    </div>
  )
}

export default PhotosHeader