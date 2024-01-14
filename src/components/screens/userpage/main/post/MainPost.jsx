import MainButtons from "./MainButtons"
import MainImg from "./MainImg"
import MainText from "./MainText"
import MainTitle from "./MainTitle"
import MainSend from "./modal/MainSend"
import { useState } from "react"
import MainCommentsModal from "./comments/MainCommentsModal"
const MainPost = ({ post, u }) => {
  const [modal, setModal] = useState('none')
  const [isCommented, setIsCommented] = useState(false)
  return (
      <div className="main__post">
          <MainTitle u={u} post={post}/>
          <MainText post={post}/>
      <MainImg post={post} />
      <MainButtons isCommented={isCommented} setIsCommented={setIsCommented} setModal={setModal} post={post} />
      <MainCommentsModal post={post} setIsCommented={setIsCommented} isCommented={isCommented}/>
      <MainSend setModal={setModal} modal={modal} post={post}/>
    </div>
  )
}

export default MainPost