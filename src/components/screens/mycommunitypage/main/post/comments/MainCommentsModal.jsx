import {RxCross1} from 'react-icons/rx'
import { useContext, useState, useEffect } from "react"
import { WrapperContext } from "../../../../../context/Wrapper"
import MainComment from "./MainComment"
import MainCommentsCreate from "./MainCommentsCreate"
import axios from 'axios'
const MainCommentsModal = ({ isCommented, setIsCommented, post }) => {
  const { setWrapper } = useContext(WrapperContext)
  const [photo, setPhoto] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const getUser = async () => {
    const result = await axios.get(`http://localhost:8080/users/${id}`)
    setName(result.data.name)
    setPhoto(result.data.suname)
    setSurname(result.data.photo)
  }
  useEffect(() => {
    getUser()
  }, [])
  return (
  <>
      {isCommented && <div className="modal__post__modalcomments">
      <RxCross1 onClick={() => {
          setIsCommented(false)
          setWrapper('wrapper')
        }} className='modal__post__modalcomments__cross' />
        <div className="modal__post__modalcomments__comments">
          {post.comments.map(comm => (
            <MainComment photo={photo} name={name} surname={surname} key={comm.id} comm={comm}/>
              ))}
        </div>
    <MainCommentsCreate name={name} surname={surname} photo={photo} post={post}/> 
      </div>}
      </>
  )
}

export default MainCommentsModal