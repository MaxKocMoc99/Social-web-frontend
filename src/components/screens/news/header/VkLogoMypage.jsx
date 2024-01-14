import { Link } from 'react-router-dom'
import '../../../../styles/Mypage.scss'
import {SlSocialVkontakte} from 'react-icons/sl'
const VkLogoMypage = () => {
  return (
      <Link className='header__container__vk-logo' to={'/feed'}>
          <SlSocialVkontakte color='white' size={20} />
           </Link>
  )
}

export default VkLogoMypage