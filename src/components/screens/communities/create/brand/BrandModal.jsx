import { useContext, useState} from 'react'
import {RxCross1} from 'react-icons/rx'
import { WrapperContext } from '../../../../context/Wrapper'
import axios from 'axios'
const BrandModal = ({ setBrandGroup, setCreateGroup }) => {
  const { setWrapper } = useContext(WrapperContext)
  const id = localStorage.getItem("id")
    const [name, setName] = useState('')
  const [type, setType] = useState('')
  return (
    <div className='communitites__header__create-theme'>
    <div className='communitites__header__create-theme__header'>
    <p> Создание сообщества</p>
        <RxCross1 onClick={() => {
            setBrandGroup(false)
            setCreateGroup('communitites__header__create-modal')
}} size={18} cursor={'pointer'}/>
    </div>
    <div className='communitites__header__create-theme__main'>
        <p className='communitites__header__create-theme__main__title'>Бренд или организация</p>
        <p className='communitites__header__create-theme__main__text'>Создайте сообщество своего проекта <br/>
в крупнейшей социальной сети СНГ</p>
        <div className='communitites__header__create-theme__main__input'>
            <p className='communitites__header__create-theme__main__input__text'>Название:</p>
            <input onKeyPress={async (e) => {
            if (name && type && e.key === 'Enter') {
              await axios.post("http://localhost:8080/myGroups/create", {
                id: id,
               name: name, 
               type: type,
               routingId: id
           })
           setBrandGroup(false)
           setCreateGroup('none')
           setWrapper('wrapper')
          }
                  }} value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div className='communitites__header__create-theme__main__input'>
        <p className='communitites__header__create-theme__main__input__text'>Тематика:</p>
          <input onKeyPress={async (e) => {
                     if (name && type && e.key === 'Enter') {
                       await axios.post("http://localhost:8080/myGroups/create", {
                        id: id,
               name: name, 
               type: type,
               routingId: id
           })
           setBrandGroup(false)
           setCreateGroup('none')
           setWrapper('wrapper')
          }
                  }} value={type} onChange={e => setType(e.target.value)}/>
        </div>
    </div>
    <div className='communitites__header__create-theme__footer'>
        <button className='communitites__header__create-theme__footer__cancel' onClick={() => {
             setBrandGroup(false)
            setCreateGroup('communitites__header__create-modal')
        }}>Отмена</button>
        <button className='communitites__header__create-theme__footer__create' onClick={async () => {
         if (name && type) {
           await axios.post("http://localhost:8080/myGroups/create", {
            id: id,
               name: name, 
               type: type,
               routingId: id
           })
           setBrandGroup(false)
           setCreateGroup('none')
           setWrapper('wrapper')
          }
        }}>Создать сообщество</button>
    </div>
</div>
  )
}

export default BrandModal