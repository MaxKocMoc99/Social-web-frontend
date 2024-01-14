import React from 'react'
const CityInput = ({ cityValue, setCityValue, cityStyle, setCityStyle }) => {
    function handleEmailChange(event) {
        setCityValue(event.target.value)
        if (!event.target.value) {
          setCityStyle('modal__input-red')
        } else {
          setCityStyle('modal__input')
        }
      }
  return (
    <input name='city' onChange={handleEmailChange} value={cityValue} placeholder='Город' className={cityStyle} />
  )
}

export default CityInput