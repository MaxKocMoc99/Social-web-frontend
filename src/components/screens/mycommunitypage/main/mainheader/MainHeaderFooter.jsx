const MainHeaderFooter = ({ g, setPhoto }) => {
  return (
      <div className="mainmypage__header__footer">
      <button className="mainmypage__header__footer__circle" onMouseLeave={() => setPhoto(false)} onMouseEnter={() => setPhoto(true)}>
        {g.photo ? <img src={g.photo} alt='' /> : ''}
          </button>
          <div className="mainmypage__header__footer__description">
        <div className="mainmypage__header__footer__description__name">{g.name}</div>
          </div>
    </div>
  )
}

export default MainHeaderFooter