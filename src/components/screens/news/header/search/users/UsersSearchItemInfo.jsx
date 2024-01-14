const UsersSearchItemInfo = ({u}) => {
  return (
    <div className="users__search-item__info">
          <p>{u.name} {u.surname}</p>
</div>
  )
}

export default UsersSearchItemInfo