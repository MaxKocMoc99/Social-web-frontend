const EmailInput = ({setEmailStyle, emailStyle, emailValue, setEmailValue}) => {
    function handleEmailChange(event) {
        setEmailValue(event.target.value)
        if (!event.target.value) {
          setEmailStyle('modal__input-red')
        } else {
          setEmailStyle('modal__input')
        }
      }
  return (
    <input name='email' onChange={handleEmailChange} value={emailValue} placeholder='Email' className={emailStyle} />
  )
}

export default EmailInput