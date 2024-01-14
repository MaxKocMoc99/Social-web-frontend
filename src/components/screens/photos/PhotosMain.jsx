import PhotosGallery from "./gallery/PhotosGallery"
import PhotosHeader from "./header/PhotosHeader"
import { useEffect, useState } from 'react'
import axios from "axios"
const PhotosMain = () => {
  const [gallery, setGallery] = useState([])
  const id = localStorage.getItem("id")
  const getUser = async () => {
      const result = await axios.get(`http://localhost:8080/users/${id}`)
      setGallery(result.data.gallery)
  }
  useEffect(() => {
   getUser()
  }, [])
  return (
      <div className="photos">
      <PhotosHeader id={id} gallery={gallery}/>
      <PhotosGallery gallery={gallery}/>
    </div>
  )
}

export default PhotosMain