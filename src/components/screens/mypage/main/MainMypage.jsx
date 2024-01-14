import MainHeaderMypage from "./mainheader/MainHeaderMypage"
import { useEffect, useState } from "react"
import MoreModal from "./more/MoreModal"
import PhotoModal from "./photo/PhotoModal"
import UpdatePhoto from "./photo/update/UpdatePhoto"
import NewPost from "./NewPost"
import MainPost from "./post/MainPost"
import axios from "axios"
const MainMypage = () => {
  const [moreModal, setMoreModal] = useState(false)
  const [photo, setPhoto] = useState(false)
  const [updatePhoto, setUpdatePhoto] = useState(false)
  const [posts, setPosts] = useState([])
  const [userPhoto, setUserPhoto] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [city, setCity] = useState('')
  const [background, setBackground] = useState('')
  const [birth, setBirth] = useState('')
  const [myGroupsLength, setMyGroupsLength] = useState(0)
  const [friendsLength, setFriendsLength] = useState(0)
  const id = localStorage.getItem("id")
  const getUser = async () => {
      const result = await axios.get(`http://localhost:8080/users/${id}`)
    setUserPhoto(result.data.photo)
    setName(result.data.name)
    setSurname(result.data.surname)
    setCity(result.data.city)
    setBackground(result.data.background)
    setBirth(result.data.birth)
    setMyGroupsLength(result.data.myGroups.length)
    setFriendsLength(result.data.friends.length)
  }
  const getAllPosts = async () => {
    const result = await axios.get(`http://localhost:8080/posts}`)
    setPosts(result.data)
}
  useEffect(() => {
    getUser()
    getAllPosts()
  }, [])
  const userPosts = [...posts].filter(p => p.routingId == id)
  return (
      <div className="mainmypage">
      <MainHeaderMypage background={background} city={city} name={name} surname={surname} userPhoto={userPhoto} photo={photo} setPhoto={setPhoto} moreModal={moreModal} setMoreModal={setMoreModal}/>
      {moreModal && <MoreModal myGroupsLength={myGroupsLength} friendsLength={friendsLength} city={city} birth={birth} setMoreModal={setMoreModal}/>}
      {photo && <PhotoModal setPhoto={setPhoto} setUpdatePhoto={setUpdatePhoto}/>}
      {updatePhoto && <UpdatePhoto setUpdatePhoto={setUpdatePhoto} />}
      <NewPost id={id} surname={surname} name={name} userPhoto={userPhoto}/>
      {userPosts.map(post => (
        <MainPost post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default MainMypage