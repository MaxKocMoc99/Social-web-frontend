import MainHeaderFooter from "./MainHeaderFooter"
const MainHeaderCommunityPage = ({g}) => {
  return (
    <div className="mainmypage__header">
           <div className="mainmypage__header__block">
         {g.background ? <img className="mainmypage__header__block__img" src={g.background}/> : ''} 
            </div>
      <MainHeaderFooter g={g}/>
    </div>
  )
}

export default MainHeaderCommunityPage