import '../../../../styles/Mypage.scss'
import VkLogoMypage from './VkLogoMypage'
import SearchMypage from './SearchMypage'
import { Link } from 'react-router-dom'
import HeaderNotification from './HeaderNotification'
import HeaderProfile from './HeaderProfile'
import ProfileModal from './profileModal/ProfileModal'
import { useState, useMemo, useEffect } from 'react'
import NotificationModal from './notification/NotificationModal'
import axios from 'axios'
import SearchModal from './search/SearchModal'
const HeaderMypage = () => {
  const id = localStorage.getItem("id")
  const [photo, setPhoto] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [notifications, setNotifications] = useState([])
  const [friends, setFriends] = useState([])
  const [subscribedUsers, setSubscribedUsers] = useState([])
  const [subscribedGroups, setSubscribedGroups] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const [allGroups, setAllGroups] = useState([])
  const getUser = async () => {
      const result = await axios.get(`http://localhost:8080/users/${id}`)
    setPhoto(result.data.photo)
    setName(result.data.name)
    setSurname(result.data.surname)
    setNotifications(result.data.notifications)
    setFriends(result.data.friends)
    setSubscribedUsers(result.data.subscribedUsers)
    setSubscribedGroups(result.data.subscribedGroups)
  }
  const getAllUsers = async () => {
      const result = await axios.get(`http://localhost:8080/users`)
      setAllUsers(result.data)
  }
  const getAllGroups= async () => {
      const result = await axios.get(`http://localhost:8080/groups`)
      setAllGroups(result.data)
  }
  useEffect(() => {
      getUser()
      getAllUsers()
      getAllGroups()
  }, [])
  const [profileModal, setProfileModal] = useState('none')
  const [notificationModal, setNotificationModal] = useState('none')
  const [value, setValue] = useState('')
  const usersWithoutMe = [...allUsers].filter(u => u.id != id)
  const sortedGroups = useMemo(() => {
    return [...allGroups].filter(g => g.name.includes(value))
  }, [allGroups, value])
  const sortedUsers = useMemo(() => {
    return [...usersWithoutMe].filter(u => u.name.includes(value))
  }, [usersWithoutMe, value])
  return (
    <header>
          <div className='header__container'>
              <VkLogoMypage />
              <Link to={'/feed'} className='header__container__logo-text'>ВКОНТАКТЕ</Link>
        <SearchMypage value={value} setValue={setValue}/>
        <HeaderNotification notificationModal={notificationModal} setNotificationModal={setNotificationModal}/>
        <HeaderProfile photo={photo} profileModal={profileModal} setProfileModal={setProfileModal}/>
      </div>
      <ProfileModal profileModal={profileModal}/>
      <NotificationModal friends={friends} id={id} surname={surname} photo={photo} name={name} notifications={notifications} notificationModal={notificationModal} />
      {value.length ? <SearchModal subscribedGroups={subscribedGroups} id={id} surname={surname} photo={photo} name={name} friends={friends} subscribedUsers={subscribedUsers} sortedGroups={sortedGroups} sortedUsers={sortedUsers} value={value}/> : ''}
    </header>
  )
}

export default HeaderMypage