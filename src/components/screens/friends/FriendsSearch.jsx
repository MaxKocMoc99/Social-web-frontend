import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom'
const FriendsSearch = ({value, setValue}) => {
  return (
      <div className="friends__search">
          <div className="friends__search__input">
              <input value={value} onChange={e => setValue(e.target.value)} placeholder="Поиск друзей"/>
          </div>
          <Link className="friends__search__button">
              <AiOutlineSearch size={20}/>
          </Link>
      </div>
  )
}

export default FriendsSearch