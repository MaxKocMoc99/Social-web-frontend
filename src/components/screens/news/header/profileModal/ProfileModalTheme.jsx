import { useLayoutEffect, useState } from 'react'
import { MdOutlinePalette } from 'react-icons/md'
const ProfileModalTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  useLayoutEffect(() => {
    document.documentElement.setAttribute('theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])
  return (
      <div className="profile__modal__item">
          <MdOutlinePalette fontSize={20} color='blue' />
          <div className='profile__modal__item__text'>
        <p>  Тема: </p>
        <button onClick={() => {
          setTheme('light')
        }}>Светлая</button>
              <p className='profile__modal__item__text__slash'>/</p>
        <button onClick={() => {
          setTheme('dark')
              }}>Тёмная</button>
          </div>
    </div>
  )
}

export default ProfileModalTheme