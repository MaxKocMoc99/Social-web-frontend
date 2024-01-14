import CommunitiesSearchItem from "../../../communities/searchitem/CommunitiesSearchItem"
import UsersSearchItems from "./users/UsersSearchItems"
const SearchModal = ({ value, sortedGroups, sortedUsers, friends,  subscribedUsers, id, surname, photo, name, subscribedGroups}) => {
  return (
      <>
      <div className="search__modal__header">
        <div>
          <p>Люди</p>
        {value.length ? sortedUsers.map(u => (
        <UsersSearchItems id={id} surname={surname} photo={photo} name={name} friends={friends} subscribedUsers={subscribedUsers} key={u.id} u={u}/>
      )) : ''} 
        </div>
        <div>
          <p>Сообщества</p>
        {value.length ? sortedGroups.map(g => (
        <CommunitiesSearchItem id={id} subscribedGroups={subscribedGroups} key={g.id} g={g}/>
      )) : ''} 
          </div>
        </div>
    </>
  )
}

export default SearchModal