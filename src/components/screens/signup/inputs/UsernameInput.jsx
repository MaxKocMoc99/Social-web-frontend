const UsernameInput = ({setUsernameStyle, usernameStyle, usernameValue, setUsernameValue}) => {
    function handleUsernameChange(event) {
        setUsernameValue(event.target.value)
        if (!event.target.value) {
          setUsernameStyle('modal__input-red')
        } else {
          setUsernameStyle('modal__input')
        }
      }
  return (
    <input name='username' onChange={handleUsernameChange} value={usernameValue} placeholder='Имя' className={usernameStyle} />
  )
}

export default UsernameInput