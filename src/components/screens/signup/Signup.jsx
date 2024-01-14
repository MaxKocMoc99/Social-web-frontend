import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Date from './Date'
import '../../../styles/Signup.scss'
import UsernameInput from './inputs/UsernameInput'
import UserlastnameInput from './inputs/UserlastnameInput'
import EmailInput from './inputs/EmailInput'
import PasswordInput from './inputs/PasswordInput'
import PasswordInputConfirm from './inputs/PaswwordInputConfirm'
import { WrapperContext } from '../../context/Wrapper'
import CityInput from './inputs/CityInput'
import axios from 'axios'
const Signup = () => {
  const [usernameStyle, setUsernameStyle] = useState('modal__input')
  const [userlastnameStyle, setUserlastnameStyle] = useState('modal__input')
  const [emailStyle, setEmailStyle] = useState('modal__input')
  const [passwordStyle, setPasswordStyle] = useState('modal__input')
  const [password2Style, setPassword2Style] = useState('modal__input')
  const [cityStyle, setCityStyle] = useState('modal__input')
  const { password2Value, setPassword2Value, passwordValue, setPasswordValue, emailValue, setEmailValue, usernameValue,
    setUsernameValue, userlastnameValue, setUserlastnameValue, setCityValue,
    cityValue, day, setDay, month, setMonth, year, setYear} = useContext(WrapperContext)
  return (
      <div className='modal'>
          <div className='modal__title'>
              Впервые ВКонтакте?
          </div>
          <div className='modal__minititle'>
              Моментальная регистрация
      </div>
      <UsernameInput usernameValue={usernameValue} setUsernameValue={setUsernameValue} usernameStyle={usernameStyle} setUsernameStyle={setUsernameStyle} />
      <UserlastnameInput userlastnameValue={userlastnameValue} setUserlastnameValue={setUserlastnameValue} userlastnameStyle={userlastnameStyle} setUserlastnameStyle={setUserlastnameStyle}/>
          <div className='modal__date'>Дата рождения</div>
      <Date day={day} month={month} year={year} setDay={setDay} setMonth={setMonth} setYear={setYear}/>
      <CityInput cityValue={cityValue} setCityValue={setCityValue} cityStyle={cityStyle} setCityStyle={setCityStyle}/>
      <EmailInput emailValue={emailValue} setEmailValue={setEmailValue} emailStyle={emailStyle} setEmailStyle={setEmailStyle}/>
      <PasswordInput passwordValue={passwordValue} setPasswordValue={setPasswordValue} passwordStyle={passwordStyle} setPasswordStyle={setPasswordStyle} />
      <PasswordInputConfirm password2Value={password2Value} setPassword2Value={setPassword2Value} password2Style={password2Style} setPassword2Style={setPassword2Style} />
      {userlastnameValue.length && usernameValue.length && emailValue.length && passwordValue.length && cityValue.length && passwordValue == password2Value
      && /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(emailValue)  ?
        <Link to={'/feed'} onClick={async () => {
        if (passwordValue !== password2Value) {
          setPasswordStyle('modal__input-red')  
        }
        await axios.post("http://localhost:8080/users/create", {
            id: userId,
            name: usernameValue,
            surname: userlastnameValue, 
            city: cityValue,
            birth: day + ' ' +  month + ' ' + year
          })
          localStorage.setItem("id", userId)
      }} className='modal__button'>Зарегистрироваться</Link>  : <Link onClick={() => {
        if (passwordValue !== password2Value) {
          setPasswordStyle('modal__input-red') 
        }
        }} className='modal__button'>Зарегистрироваться</Link>}
    </div>
  )
}

export default Signup