import { AiFillHeart } from 'react-icons/ai'
import { TfiComment } from 'react-icons/tfi'
import {IoArrowRedoOutline} from 'react-icons/io5'
import { useContext, useState, useEffect } from 'react'
import { WrapperContext } from '../../../../context/Wrapper'
import axios from 'axios'
const MainButtons = ({ setModal, setIsCommented, isCommented, post }) => { 
  const id = localStorage.getItem("id")
  const { setWrapper } = useContext(WrapperContext)
  const [bookmarks, setBookmarks] = useState([])
  const inBookmarks = [...bookmarks].find(b => b.routingId === post.id)
  const getUser = async () => {
    const result = await axios.get(`http://localhost:8080/users/${id}`)
    setBookmarks(result.data.bookmarks)
  }
  useEffect(() => {
    getUser()
  }, [])
  return (
      <div className="main__post__buttons">
      <div className='main__post__buttons__item'>
        <AiFillHeart onClick={async () => {
          if (inBookmarks) {
          await axios.post("http://localhost:8080/bookmarks/remove", {
              id: id,
              routingId: inBookmarks.id
            })
          } else {
           await axios.post("http://localhost:8080/bookmarks/add", {
              id: post.id,
              bookmarkId: post.id
            })
          }
        }} color={inBookmarks ? 'red' : 'gray'} size={22} />
        <p className='main__post__buttons__item__number'>{post.likes}</p>
          </div>
          <div className='main__post__buttons__item'>
        <TfiComment size={22} onClick={() => {
          if (isCommented == false) {
            setIsCommented(true)
            setWrapper('darkwrapper')
          } else {
            setIsCommented(false)
          }
        }} color='gray'/>
        <p className='main__post__buttons__item__number'>{post.comments.length}</p>
          </div>
          <div className='main__post__buttons__item'>
        <IoArrowRedoOutline size={22} onClick={() => {
            setWrapper('darkwrapper')
          setModal('main__post__send')
        }} color='gray'/>
        <p className='main__post__buttons__item__number'>{post.sends}</p>
      </div>
    </div>
  )
}

export default MainButtons