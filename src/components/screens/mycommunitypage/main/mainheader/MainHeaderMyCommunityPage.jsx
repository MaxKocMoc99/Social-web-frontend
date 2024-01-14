import MainHeaderFooter from "./MainHeaderFooter"
import ChangeBack from "./change/ChangeBack"
const MainHeaderMyCommunityPage = ({g, photo ,setPhoto}) => {
  return (
    <div className="mainmypage__header">
      <ChangeBack g={g}/>
      <MainHeaderFooter g={g} photo={photo} setPhoto={setPhoto}/>
    </div>
  )
}

export default MainHeaderMyCommunityPage