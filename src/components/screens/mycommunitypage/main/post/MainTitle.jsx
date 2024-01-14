const MainTitle = ({ post, g }) => {
  return (
    <div className="main__post__title">
    <div className="main__post__title__logo">
        <div className="main__post__title__logo__logo">
          {g.photo ? <img src={g.photo} alt=''/> : ''}
        </div>
    </div>
    <div className="main__post__title__text">
        <div className="main__post__title__text__title">{g.name}</div>
        <div className="main__post__title__text__time">{post.time}</div>
    </div>
</div>
  )
}

export default MainTitle