import UpdatePhotoFooter from "./UpdatePhotoFooter"
import UpdatePhotoHeader from "./UpdatePhotoHeader"
import UpdatePhotoMain from "./UpdatePhotoMain"
const UpdatePhoto = ({setUpdatePhoto, g}) => {
  return (
      <div className="mainmypage__photo-update">
          <UpdatePhotoHeader setUpdatePhoto={setUpdatePhoto} />
          <UpdatePhotoMain g={g} setUpdatePhoto={setUpdatePhoto}/>
          <UpdatePhotoFooter/>
    </div>
  )
}

export default UpdatePhoto