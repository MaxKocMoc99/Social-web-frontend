const PasswordInput = ({setPasswordStyle, passwordStyle, passwordValue, setPasswordValue}) => {
    function handlePasswordChange(event) {
        setPasswordValue(event.target.value)
        if (!event.target.value) {
          setPasswordStyle('modal__input-red')
        } else {
          setPasswordStyle('modal__input')
        }
      }
  return (
    <input onChange={handlePasswordChange} value={passwordValue} name='password' type='password' placeholder='Пароль' className={passwordStyle} />
  )
}

export default PasswordInput