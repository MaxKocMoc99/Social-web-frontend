import NewPost from './NewPost'
import MainHeaderMyCommunityPage from "./mainheader/MainHeaderMyCommunityPage"
import PhotoModal from "./photo/PhotoModal"
import UpdatePhoto from "./photo/update/UpdatePhoto"
import { useState, useEffect } from "react"
import MainPost from "./post/MainPost"
import axios from 'axios'
const MainMyCommunityPage = ({ g }) => {
  const [photo, setPhoto] = useState(false)
  const [updatePhoto, setUpdatePhoto] = useState(false)
  const [posts, setPosts] = useState([])
  const getAllPosts = async () => {
      const result = await axios.get(`http://localhost:8080/posts`)
      setPosts(result.data)
  }
  useEffect(() => {
   getAllPosts()
  }, [])
  const groupPosts = [...posts].filter(p => p.routingId == g.id)
  return (
      <div className="mainmypage">
      <MainHeaderMyCommunityPage g={g} photo={photo} setPhoto={setPhoto}/>
      {photo && <PhotoModal setPhoto={setPhoto} setUpdatePhoto={setUpdatePhoto}/>}
      {updatePhoto && <UpdatePhoto setUpdatePhoto={setUpdatePhoto} g={g} />}
      <NewPost g={g} />
      {groupPosts.map(post => (
        <MainPost g={g} post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default MainMyCommunityPage