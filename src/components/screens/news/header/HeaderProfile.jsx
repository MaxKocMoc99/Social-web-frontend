import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
const HeaderProfile = ({ setProfileModal, profileModal , photo}) => {
  return (
    <button onClick={() => {
      if (profileModal == 'none') {
        setProfileModal('profile__modal')
      } else {
        setProfileModal('none')
      }
    }}
      className='header__container__profile'>
      <div className='header__container__profile__circle'>
        {photo ? <img src={photo} alt=''/> : ''}
          </div>
          <MdOutlineKeyboardArrowDown size={14}/>
    </button>
  )
}

export default HeaderProfile