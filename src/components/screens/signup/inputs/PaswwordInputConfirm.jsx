import { useState } from 'react'
const PasswordInputConfirm = ({setPassword2Style, password2Style, password2Value, setPassword2Value}) => {
    function handlePassword2Change(event) {
        setPassword2Value(event.target.value)
        if (!event.target.value) {
          setPassword2Style('modal__input-red')
        } else {
          setPassword2Style('modal__input')
        }
      }
  return (
    <input onChange={handlePassword2Change} value={password2Value} name='password2' type='password' placeholder='Пароль ещё раз' className={password2Style} />
  )
}

export default PasswordInputConfirm