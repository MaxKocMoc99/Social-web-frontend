const MainImg = ({post}) => {
  return (
      <div className="main__post__img">
    {post.img ? <img src={post.img} alt=""/> : ''}
    </div>
  )
}

export default MainImg