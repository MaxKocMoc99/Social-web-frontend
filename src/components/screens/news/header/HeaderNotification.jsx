import '../../../../styles/Mypage.scss'
import {TbBell} from 'react-icons/tb'
const HeaderNotification = ({setNotificationModal, notificationModal}) => {
  return (
    <button className='header__container__notification' onClick={() => {
      if (notificationModal == 'none') {
        setNotificationModal('notification__modal')
      } else {
        setNotificationModal('none')
        }
      }}>
          <TbBell  size={24}/>
      </button>
      
  )
}

export default HeaderNotification