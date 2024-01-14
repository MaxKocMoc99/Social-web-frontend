import { useContext, useState } from 'react'
import {RxCross1} from 'react-icons/rx'
import { WrapperContext } from '../../../../context/Wrapper'
import axios from 'axios'
const BuisnessModal = ({ setBuisnessGroup, setCreateGroup }) => {
  const {setWrapper } = useContext(WrapperContext)
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const id = localStorage.getItem("id")
  return (
<div className='communitites__header__create-buisness'>
                <div className='communitites__header__create-buisness__text'>
                    <p className='communitites__header__create-buisness__text__title'>Создайте сообщество <br/> для вашего бизнеса</p>
                    <p className='communitites__header__create-buisness__text__text'>Получите новых клиентов с помощью <br/> огромной аудитории ВКонтакте</p>
                    <p className='communitites__header__create-buisness__text__text'>Общайтесь с вашими клиентами через <br/> мессенджер</p>
                    <p className='communitites__header__create-buisness__text__text'>Публикуйте товары и услуги в <br/> сообществе и продавайте их в <br/> Маркете</p>
                    <p className='communitites__header__create-buisness__text__text'>Получите присутствие вашей <br/> компании в Интернете</p>
                </div>
                <div className='communitites__header__create-buisness__input'>
                    <div className='communitites__header__create-buisness__input__item'>
                    <p>Укажите название</p>
                    <input value={name} onChange={e => setName(e.target.value)} onKeyPress={async (e) => {
                 if (name && type && e.key === 'Enter') {
                   await axios.post("http://localhost:8080/myGroups/create", {
                    id: id,
               name: name, 
               type: type,
               routingId: id
           })
           setBuisnessGroup(false)
           setCreateGroup('none')
           setWrapper('wrapper')
          }
          }}/>
                    </div>
                    <div className='communitites__header__create-buisness__input__item'>
                    <p>Укажите тематику</p>
          <input onKeyPress={async (e) => {
                 if (name && type && e.key === 'Enter') {
                   await axios.post("http://localhost:8080/myGroups/create", {
                    id: id, 
               name: name, 
               type: type,
               routingId: id
           }) 
           setBuisnessGroup(false)
           setCreateGroup('none')
           setWrapper('wrapper')
          }
          }} value={type} onChange={e => setType(e.target.value)}/>
                    </div>
        <button onClick={async () => {
              if (name && type) {
                await axios.post("http://localhost:8080/myGroups/create", {
                  id: id,
               name: name, 
               type: type,
               routingId: id
           })
           setBuisnessGroup(false)
           setCreateGroup('none')
           setWrapper('wrapper')
          }
        }}>
                        Создать сообщество
                    </button>
                </div>
                <RxCross1 onClick={() => {
                    setBuisnessGroup(false)
        setCreateGroup('communitites__header__create-modal')
          }} className='communitites__header__create-buisness__cross' />
            </div>
  )
}

export default BuisnessModal