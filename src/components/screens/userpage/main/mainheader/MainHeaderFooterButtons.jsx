import { GoLocation } from 'react-icons/go'
import {CgMoreVerticalO} from 'react-icons/cg'
import { useContext } from 'react'
import { WrapperContext } from '../../../../context/Wrapper'
const MainHeaderFooterButtons = ({ setMoreModal,u }) => {
  const {setWrapper} = useContext(WrapperContext)
  return (
    <div className="mainmypage__header__footer__description__buttons">
    <div className="mainmypage__header__footer__description__buttons__item">
        <GoLocation color='gray' size={22}/>
        <p className="mainmypage__header__footer__description__buttons__item__text">{u.city}</p>
    </div>
      <button className="mainmypage__header__footer__description__buttons__item" onClick={() => {
        setMoreModal(true)
        setWrapper('darkwrapper')
    }}>
        <CgMoreVerticalO color='gray' size={20}/>
    <p className="mainmypage__header__footer__description__buttons__item__text">Подробнее</p>
    </button>
</div>
  )
}

export default MainHeaderFooterButtons