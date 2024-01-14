const CommunitiesSearchItemInfo = ({g}) => {
  return (
    <div className="communities__search-items__info">
          <p>{g.name}</p>
          <div>
              <p>{g.type}, {g.users.length}</p>
          </div>
    </div>
  )
}

export default CommunitiesSearchItemInfo