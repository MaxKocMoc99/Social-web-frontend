const UserlastnameInput = ({userlastnameStyle, setUserlastnameStyle, userlastnameValue, setUserlastnameValue}) => {
    function handleUserlastnameChange(event) {
        setUserlastnameValue(event.target.value)
        if (!event.target.value) {
          setUserlastnameStyle('modal__input-red')
        } else {
          setUserlastnameStyle('modal__input')
        }
        }
  return (
    <input name='userlastname' onChange={handleUserlastnameChange} value={userlastnameValue} placeholder='Фамилия' className={userlastnameStyle} />
  )
}

export default UserlastnameInput