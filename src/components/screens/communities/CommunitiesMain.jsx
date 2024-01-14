import {useEffect, useMemo, useState } from "react"
import CommunitiesSearch from "./CommunitiesSearch"
import CommutitiesHeader from "./header/CommutitiesHeader"
import ComminitiesItem from "./item/ComminitiesItem"
import MyComminitiesItem from './item/MyCommunitiesItem'
import axios from "axios"
const CommunitiesMain = () => {
  const [value, setValue] = useState('')
  const [isMyCommunities, setIsMyCommunities] = useState(false)
  const [subscribedGroups, setSubscribedGroups] = useState([])
  const [groups, setGroups] = useState([])
  const id = localStorage.getItem("id")
  const getUser = async () => {
    const result = await axios.get(`http://localhost:8080/users/${id}`)
    setSubscribedGroups(result.data.subscribedGroups)
  }
  const getAllGroups = async () => {
    const result = await axios.get(`http://localhost:8080/groups`)
    setGroups(result.data)
  }
  useEffect(() => {
    getUser()
    getAllGroups()
  }, [])
  const myGroups= [...groups].filter(g => g.routingId === id)
  const sortedSubscribedGroups = useMemo(() => {
    return [...subscribedGroups ].filter(g => g.name.includes(value))
  }, [subscribedGroups, value])
  const sortedMyGroups = useMemo(() => {
    return [...myGroups ].filter(g => g.name.includes(value))
  }, [myGroups, value])
  return (
      <div className="communities">
      <CommutitiesHeader myGroups={myGroups} subscribedGroups={subscribedGroups} setIsMyCommunities={setIsMyCommunities}/>
      <CommunitiesSearch value={value} setValue={setValue} />
      {isMyCommunities ? sortedMyGroups.map(g => (
        <MyComminitiesItem  key={g.id} g={g}/>
      )) : sortedSubscribedGroups.map(g => (
        <ComminitiesItem key={g.id} g={g}/>
      ))} 
      </div>
  )
}

export default CommunitiesMain