import ChangeBack from "./change/ChangeBack"
import MainHeaderFooter from "./MainHeaderFooter"
const MainHeaderMypage = ({moreModal, setMoreModal, photo, setPhoto, userPhoto, city, background, name, surname}) => {
  return (
    <div className="mainmypage__header">
      <ChangeBack background={background}/>
      <MainHeaderFooter city={city} name={name} surname={surname} userPhoto={userPhoto} photo={photo} setPhoto={setPhoto} moreModal={moreModal} setMoreModal={setMoreModal}/>
    </div>
  )
}

export default MainHeaderMypage