import { useState, useEffect } from "react"
import axios from 'axios'
import MainPost from "../news/main/post/MainPost"
const BookmarksMain = () => {
  const [bookmarks, setBookmarks] = useState([])
  const id = localStorage.getItem("id")
  const getUser = async () => {
      const result = await axios.get(`http://localhost:8080/users/${id}`)
      setBookmarks(result.data.bookmarks)
  }
  useEffect(() => {
   getUser()
  }, [])
  return (
    <main className="main">
        {bookmarks.map(b => (
          <MainPost key={b.id} post={b} />
            ))}
      </main>
  )
}

export default BookmarksMain