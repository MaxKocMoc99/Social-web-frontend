import '../../styles/Layout.scss'
import { useContext } from 'react'
import { WrapperContext } from '../context/Wrapper'
const Layout = ({ children }) => {
  const {wrapper} = useContext(WrapperContext)
  return (
    <div className={wrapper}>
          {children}
    </div>
  )
}

export default Layout