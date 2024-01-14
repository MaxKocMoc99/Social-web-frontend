const MainTitle = ({ post, u}) => {
  return (
    <div className="main__post__title">
    <div className="main__post__title__logo">
        <div className="main__post__title__logo__logo">
          {u.photo ? <img src={u.photo} alt=''/> : ''}
        </div>
    </div>
    <div className="main__post__title__text">
        <div className="main__post__title__text__title">{u.name}</div>
        <div className="main__post__title__text__time">{post.time}</div>
    </div>
</div>
  )
}

export default MainTitle