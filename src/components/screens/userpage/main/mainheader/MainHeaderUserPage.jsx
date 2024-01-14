import MainHeaderFooter from "./MainHeaderFooter"
const MainHeaderUserPage = ({moreModal, setMoreModal, u}) => {
  return (
    <div className="mainmypage__header">
           <div className="mainmypage__header__block">
        {u.background ? <img className="mainmypage__header__block__img" src={u.background}/> : ''}
            </div>
      <MainHeaderFooter u={u} moreModal={moreModal} setMoreModal={setMoreModal}/>
    </div>
  )
}

export default MainHeaderUserPage