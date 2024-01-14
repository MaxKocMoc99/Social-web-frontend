import MainButtons from "./MainButtons"
import MainImg from "./MainImg"
import MainText from "./MainText"
import MainTitle from "./MainTitle"
import MainSend from "./modal/MainSend"
import { useState } from "react"
import MainCommentsModal from "./comments/MainCommentsModal"
const MainPost = ({ post, g }) => {
  const [modal, setModal] = useState('none')
  const [isCommented, setIsCommented] = useState(false)
  return (
      <div className="main__post">
          <MainTitle g={g} post={post}/>
          <MainText post={post}/>
      <MainImg post={post} />
      <MainButtons isCommented={isCommented} setIsCommented={setIsCommented} setModal={setModal} post={post} />
      <MainCommentsModal post={post} setIsCommented={setIsCommented} isCommented={isCommented}/>
      <MainSend post={post} setModal={setModal} modal={modal} />
    </div>
  )
}

export default MainPost