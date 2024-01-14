import MainHeaderUserPage from "./mainheader/MainHeaderUserPage"
import { useState } from "react"
import MoreModal from "./more/MoreModal"
import MainPost from "./post/MainPost"
const MainUserPage = ({u}) => {
  const [moreModal, setMoreModal] = useState(false)
  return (
      <div className="mainmypage">
      <MainHeaderUserPage u={u} moreModal={moreModal} setMoreModal={setMoreModal}/>
      {moreModal && <MoreModal u={u} setMoreModal={setMoreModal} />}
      {u.userPosts.map(post => (
        <MainPost u={u} key={u.id}/>
      ))}
    </div>
  )
}

export default MainUserPage