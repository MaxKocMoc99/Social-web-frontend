import MainHeaderCommunityPage from "./mainheader/MainHeaderCommunityPage"
import MainPost from "./post/MainPost"
import { useEffect, useState } from "react"
import axios from "axios"
const MainCommunityPage = ({ g }) => {
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
      <MainHeaderCommunityPage g={g} />
      {groupPosts.map(post => (
        <MainPost g={g} post={post}/>
      ))}
    </div>
  )
}

export default MainCommunityPage