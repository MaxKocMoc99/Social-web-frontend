import PostPhotoDownload from "./PostPhotoDownload"
import PostPhotoHeader from "./PostPhotoHeader"

const NewPostPhoto = ({photoModal, setPhotoModal, setImageUrl}) => {
  return (
      <div className={photoModal}>
          <PostPhotoHeader setPhotoModal={setPhotoModal} />
      <PostPhotoDownload setPhotoModal={setPhotoModal} setImageUrl={setImageUrl}/>
    </div>
  )
}

export default NewPostPhoto