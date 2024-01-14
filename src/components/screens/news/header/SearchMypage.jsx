import {AiOutlineSearch} from 'react-icons/ai'
const SearchMypage = ({value, setValue}) => {
    return (
        <div className="header__container__search-block">
            <AiOutlineSearch color='black'/>
           <input value={value} onChange={e => setValue(e.target.value)} placeholder="Поиск" className='header__container__search-block__input'/>
      </div>
  )
}

export default SearchMypage