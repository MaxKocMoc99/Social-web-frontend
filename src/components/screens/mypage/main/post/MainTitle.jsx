import { useContext } from "react"
import { WrapperContext } from "../../../../context/Wrapper"
const MainTitle = ({ post }) => {
  const { usernameValue, userlastnameValue, userPhoto} = useContext(WrapperContext)
  return (
    <div className="main__post__title">
    <div className="main__post__title__logo">
        <div className="main__post__title__logo__logo">
          {userPhoto ? <img src={userPhoto} alt=''/> : ''}
        </div>
    </div>
    <div className="main__post__title__text">
        <div className="main__post__title__text__title">{ usernameValue} {userlastnameValue}</div>
        <div className="main__post__title__text__time">{post.time}</div>
    </div>
</div>
  )
}

export default MainTitle