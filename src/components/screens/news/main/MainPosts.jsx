import MainPost from "./post/MainPost"
const MainPosts = ({posts}) => {
  return (
    <div className="main__posts">
      {posts.map(post => (
        <MainPost post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default MainPosts