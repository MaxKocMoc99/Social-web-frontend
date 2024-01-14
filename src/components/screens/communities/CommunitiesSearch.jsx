import {AiOutlineSearch} from 'react-icons/ai'
const CommunitiesSearch = ({value, setValue}) => {
  return (
    <div className="communities__search">
    <div className="communities__search__input">
        <input value={value} onChange={(e => setValue(e.target.value))} placeholder="Поиск сообществ"/>
    </div>
    <div className="communities__search__button">
        <AiOutlineSearch size={20}/>
    </div>
</div>
  )
}

export default CommunitiesSearch