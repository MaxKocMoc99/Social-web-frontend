import {RxCross1} from 'react-icons/rx'
import { WrapperContext } from '../../../context/Wrapper'
import { useContext, useState } from 'react'
import BrandModal from './brand/BrandModal'
import BuisnessModal from './buisness/BuisnessModal'
import DayModal from './day/DayModal'
import InterestsModal from './interests/InterestsModal'
import PublicModal from './public/PublicModal'
import ThemeModal from './theme/ThemeModal'
const CreateCommunity = ({ createGroup, setCreateGroup }) => {
    const { setWrapper } = useContext(WrapperContext)
    const [buisnessGroup, setBuisnessGroup] = useState(false)
    const [themeGroup, setThemeGroup] = useState(false)
    const [brandGroup, setBrandGroup] = useState(false)
    const [interestsGroup, setInterestsGroup] = useState(false)
    const [publicGroup, setPublicGroup] = useState(false)
    const [dayGroup, setDayGroup] = useState(false)
    return (
        <>
      <div className={createGroup}>
          <div>
          <p>Сообщество ВКонтакте</p>
    <div>Публикуйте материалы разных форматов, общайтесь с читателями, занимайтесь <br />
              продвижением и изучайте статистику. Для начала выберите тип сообщества.</div>
          <div className="communitites__header__create-modal__grid">
                        <button onClick={() => {
                            setCreateGroup('none')
                            setBuisnessGroup(true)
              }} className="communitites__header__create-modal__grid__item">
                  <p  className="communitites__header__create-modal__grid__item__title">Бизнес</p>
                  <p  className="communitites__header__create-modal__grid__item__text">Кафе, магазин, фитнес-клуб, банк, <br />
                      кинотеатр, мастерская
                  </p>
              </button>
              <button  onClick={() => {
                            setCreateGroup('none')
                            setThemeGroup(true)
              }} className="communitites__header__create-modal__grid__item">
              <p  className="communitites__header__create-modal__grid__item__title">Тематическое сообщество</p>
                  <p  className="communitites__header__create-modal__grid__item__text">Новости и афиши, развлечения<br />
                  тематические блоги и СМИ
                  </p>
              </button>
                        <button onClick={() => {
                        setCreateGroup('none')
                            setBrandGroup(true)     
              }} className="communitites__header__create-modal__grid__item">
              <p  className="communitites__header__create-modal__grid__item__title">Бренд или организация</p>
                  <p  className="communitites__header__create-modal__grid__item__text">Товар, фильм, компания, учебное<br />
                  заведение, благотворительный фонд
                  </p>
              </button>
                        <button onClick={() => {
                            setInterestsGroup(true)
                            setCreateGroup('none')
              }} className="communitites__header__create-modal__grid__item">
              <p  className="communitites__header__create-modal__grid__item__title">Группа по интересам</p>
                  <p  className="communitites__header__create-modal__grid__item__text">Учебная группая, тайное сообщество<br />
                объединение по интересам
                  </p>
              </button>
                        <button onClick={() => {
                              setPublicGroup(true)
                            setCreateGroup('none')
              }} className="communitites__header__create-modal__grid__item">
                  <p className="communitites__header__create-modal__grid__item__title">Публичная страница</p>
                  <p  className="communitites__header__create-modal__grid__item__text">Музыкальный коллектив, общественное<br />
                  движение, блогер, спортивная команда
                  </p>
              </button>
                        <button onClick={() => {
                              setDayGroup(true)
                            setCreateGroup('none')
              }} className="communitites__header__create-modal__grid__item">
              <p  className="communitites__header__create-modal__grid__item__title">Мероприятие</p>
                  <p  className="communitites__header__create-modal__grid__item__text">Концерт, день рождения, выставка<br />
                 вечеринка, мастер класс, конференция
                  </p>
              </button>
              </div>
          </div>
          <RxCross1 onClick={() => {
                setCreateGroup('none')
                setWrapper('wrapper')
          }} className='communitites__header__create-modal__cross' />
            </div>
            {buisnessGroup && <BuisnessModal setBuisnessGroup={setBuisnessGroup} setCreateGroup={setCreateGroup}/>}
            {themeGroup && <ThemeModal setThemeGroup={setThemeGroup} setCreateGroup={setCreateGroup}/>}
            {brandGroup && <BrandModal setBrandGroup={setBrandGroup} setCreateGroup={setCreateGroup}/>}
            {interestsGroup && <InterestsModal setInterestsGroup={setInterestsGroup} setCreateGroup={setCreateGroup}/>}
            {publicGroup && <PublicModal setPublicGroup={setPublicGroup} setCreateGroup={setCreateGroup}/>}
            {dayGroup && <DayModal setDayGroup={setDayGroup} setCreateGroup={setCreateGroup}/>}
        </>
  )
}

export default CreateCommunity