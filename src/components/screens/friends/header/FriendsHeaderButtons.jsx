const FriendsHeaderButtons = ({ setIsFriends, friends }) => {
  return (
      <div className="friends__header__buttons">
          <button className="friends__header__buttons__allfriends" onClick={() => {
              setIsFriends(true)
          }}>
              <p>Все друзья</p>
              <p className="friends__header__buttons__allfriends__number">{friends.length}</p>
          </button>
          <button onClick={() => {
              setIsFriends(false)
          }} className="friends__header__buttons__search">
              Найти друзей
          </button>
    </div>
  )
}

export default FriendsHeaderButtons