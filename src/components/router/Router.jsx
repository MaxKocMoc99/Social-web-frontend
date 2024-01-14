import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Messendger from '../screens/messendger/Messendger'
import MessendgerChat from '../screens/messendger/chat/MessendgerChat'
import MessendgerGroupChat from '../screens/messendger/groupchat/MessendgerGroupChat'
import Mypage from '../screens/mypage/Mypage'
import News from '../screens/news/News'
import Signup from '../screens/signup/Signup'
import Friends from '../screens/friends/Friends'
import Communities from '../screens/communities/Communities'
import Photos from '../screens/photos/Photos'
import Bookmarks from '../screens/bookmarks/Bookmarks'
import {useState, useEffect } from 'react'
import UserPage from '../screens/userpage/UserPage'
import MyCommunityPage from '../screens/mycommunitypage/MyCommunityPage'
import CommunityPage from '../screens/communitypage/CommunityPage'
import axios from 'axios'
const Router = () => {
    const id = localStorage.getItem("id")
    const [myGroups, setMyGroups] = useState([])
    const [rooms, setRooms] = useState([])
    const [groupRooms, setGroupRooms] = useState([])
    const [allUsers, setAllUsers] = useState([])
    const [allGroups, setAllGroups] = useState([])
    const getUser = async () => {
        const result = await axios.get(`http://localhost:8080/users/${id}`)
        setGroupRooms(result.data.groupRooms)
        setMyGroups(result.data.myGroups)
        setRooms(result.data.rooms)
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
    return <BrowserRouter>
        <Routes>
            <Route element={<div>Not found</div>} path='*' />
            <Route element={<Signup />} path='/signup' />
            <Route element={<News />} path='/feed' />
            <Route element={<Mypage />} path={`/${id}`} />
            <Route element={<Messendger />} path={`/im${id}`} />
            <Route element={<Friends />} path='/friends' />
            <Route element={<Communities />} path='/groups' />
            <Route element={<Photos />} path={`/albums${id}`} />
            <Route element={<Bookmarks />} path={`/bookmarks${id}`} />
            {allUsers.map(u => (
                <Route key={u.id} element={<UserPage u={u} />} path={`/${u.id}`} />
            ))}
            {myGroups.map(g => (
                <Route key={g.id} path={`/${g.id}`} element={<MyCommunityPage g={g}/>}/>
            ))}
            {allGroups.map(g => (
                <Route key={g.id} path={`/${g.id}`} element={<CommunityPage  g={g}/>}/>
            ))}
            <Route element={<Messendger />} path={`/im${id}`} />
           {rooms.map(r => (
                <Route key={r.id} element={<MessendgerChat r={r} />} path={`/im${id}/chat${r.id}`} />
           ))} 
            
           {groupRooms.map(chat => (
                <Route key={chat.id} element={<MessendgerGroupChat r={chat} />} path={`/im${id}/chat${chat.id}`} />
           )) } 
      </Routes>
  </BrowserRouter>
}

export default Router