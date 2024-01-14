import { useEffect , useMemo, useState} from 'react'
import FriendsSearchUserItem from './FriendsSearchUserItem'
import { Link } from 'react-router-dom'
import axios from 'axios'
const FriendsSearchItems = ({ value, friends }) => {
  const id = localStorage.getItem("id")
  const [allUsers, setAllUsers] = useState([])
  const getAllUsers = async () => {
    const result = await axios.get(`http://localhost:8080/users`)
    setAllUsers(result.data)
  }
  useEffect(() => {
    getAllUsers()
  }, [])
  const usersWithoutMe = [...allUsers].filter(u => u.id != id)
    const sortedUsers = useMemo(() => {
        return [...usersWithoutMe].filter(u => u.name.includes(value))
    }, [usersWithoutMe, value])
    return (
        <>
            {value && <div className='friends__search-users'>
          {sortedUsers.map(u => (
            <div key={u.id} className='friends__search-users__item'>
            <Link to={`/${u.id}`} className="friends__search-users__item__circle" >
              {u.photo ? <img src={u.photo} alt='' /> : ''}
            </Link>
              <FriendsSearchUserItem id={id} friends={friends} key={u.id} u={u} />
              </div>
          ))}
            </div>}
    </>
  )
}

export default FriendsSearchItems