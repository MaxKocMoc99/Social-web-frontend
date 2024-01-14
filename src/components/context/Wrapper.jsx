import {useState, createContext} from 'react'
export const WrapperContext = createContext()
const Wrapper = ({ children }) => {
  const [wrapper, setWrapper] = useState('wrapper')
  const [password2Value, setPassword2Value] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [usernameValue, setUsernameValue] = useState('')
  const [userlastnameValue, setUserlastnameValue] = useState('')
  const [cityValue, setCityValue] = useState('')
  const [day, setDay] = useState('1')
  const [month, setMonth] = useState('Января')
  const [year, setYear] = useState('1953')
  return <WrapperContext.Provider value={{
    wrapper, setWrapper, password2Value, setPassword2Value, passwordValue, setPasswordValue, emailValue, setEmailValue, usernameValue, setUsernameValue, userlastnameValue, setUserlastnameValue,
    cityValue, setCityValue, day, setDay, month, setMonth, year, setYear}}>
    {children} 
  </WrapperContext.Provider>
}

export default Wrapper