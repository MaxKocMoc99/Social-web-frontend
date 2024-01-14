const MainTitle = ({ post }) => {
  return (
    <div className="main__post__title">
    <div className="main__post__title__logo">
        <div className="main__post__title__logo__logo">
          {post.circleImage ? <img src={post.circleImage} alt=''/> : ''}
        </div>
    </div>
    <div className="main__post__title__text">
        <div className="main__post__title__text__title">{post.name}</div>
        <div className="main__post__title__text__time">{post.time}</div>
    </div>
</div>
  )
}

export default MainTitle