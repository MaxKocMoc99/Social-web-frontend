import MainHeaderFooterButtons from './MainHeaderFooterButtons'
const MainHeaderFooter = ({moreModal, setMoreModal, setPhoto, userPhoto, name, surname, city}) => {
  return (
      <div className="mainmypage__header__footer">
      <button className="mainmypage__header__footer__circle" onMouseLeave={() => setPhoto(false)} onMouseEnter={() => setPhoto(true)}>
        {userPhoto ? <img src={userPhoto} alt='' /> : ''}
          </button>
          <div className="mainmypage__header__footer__description">
              <div className="mainmypage__header__footer__description__name">{name} {surname}</div>
        <MainHeaderFooterButtons city={city} moreModal={moreModal} setMoreModal={setMoreModal} /> 
          </div>
    </div>
  )
}

export default MainHeaderFooter