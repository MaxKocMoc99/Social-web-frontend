import { useState, useContext } from 'react'
import CreateCommunity from '../create/CreateCommunity'
import { WrapperContext } from '../../../context/Wrapper'
const CommunitiesHeaderButtons = ({setIsMyCommunities, myGroups, subscribedGroups}) => {
  const { setWrapper } = useContext(WrapperContext)
  const [createGroup, setCreateGroup] = useState('none')
  return (
      <div className="communities__header__buttons">
           <button className="communities__header__buttons__all" onClick={() => {setIsMyCommunities(false) }}>
              <p>Все сообщества</p>
        <p className="communities__header__buttons__all__num">{subscribedGroups.length}</p>
      </button>
      <button className="communities__header__buttons__my" onClick={() => {setIsMyCommunities(true) }}>
              <p>Управление</p>
        <p className="communities__header__buttons__my__num">{myGroups.length}</p>
          </button>
      <button onClick={() => {
        setWrapper('darkwrapper')
        setCreateGroup('communitites__header__create-modal')
          }} className="communities__header__buttons__create">
             Создать сообщество
      </button>
  <CreateCommunity setCreateGroup={setCreateGroup} createGroup={createGroup}/>
    </div>
  )
}

export default CommunitiesHeaderButtons