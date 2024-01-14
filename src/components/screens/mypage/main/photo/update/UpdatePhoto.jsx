import UpdatePhotoFooter from "./UpdatePhotoFooter"
import UpdatePhotoHeader from "./UpdatePhotoHeader"
import UpdatePhotoMain from "./UpdatePhotoMain"
const UpdatePhoto = ({setUpdatePhoto}) => {
  return (
      <div className="mainmypage__photo-update">
          <UpdatePhotoHeader setUpdatePhoto={setUpdatePhoto} />
          <UpdatePhotoMain setUpdatePhoto={setUpdatePhoto}/>
          <UpdatePhotoFooter/>
    </div>
  )
}

export default UpdatePhoto