import MainPosts from "./MainPosts"
import NewPostMain from "./NewPostMain"
import axios from "axios"
import { useEffect, useState } from "react"
const Main = () => {
  const [posts, setPosts] = useState([])
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [photo, setPhoto] = useState('')
  const id = localStorage.getItem("id")
  const getUser = async () => {
      const result = await axios.get(`http://localhost:8080/users/${id}`)
    setPosts(result.data.news)
    setName(result.data.name)
    setSurname(result.data.surname)
    setPhoto(result.data.photo)
  }
  useEffect(() => {
   getUser()
  }, [])
  return (
      <main className="main">
      <NewPostMain photo={photo} name={name} surname={surname} id={id}/>
      <MainPosts posts={posts}/>
    </main>
  )
}

export default Main