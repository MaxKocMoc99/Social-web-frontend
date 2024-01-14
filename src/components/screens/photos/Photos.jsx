import HeaderMypage from "../news/header/HeaderMypage"
import '../../../styles/Mypage.scss'
import Sidebar from "../sidebar/Sidebar"
import PhotosMain from "./PhotosMain"
const Photos = () => {
  return (
      <>
               <HeaderMypage />
          <Sidebar />
          <PhotosMain/>
    </>
  )
}

export default Photos