import { HiOutlinePhotograph } from 'react-icons/hi'
import {BsTrash3} from 'react-icons/bs'
import  { WrapperContext } from '../../../../../context/Wrapper'
import {useContext} from 'react'
const ChangeBackModal = ({ changeModal, addModal, setAddModal, removeModal, setRemoveModal }) => {
  const { setWrapper } = useContext(WrapperContext)
  return (
    <div className={changeModal}>
      <button className='mainmypage__header__change__modal__item' onClick={() => {
          setWrapper('darkwrapper')
          setAddModal('add__modal')
    }}>
        <HiOutlinePhotograph size={20} color={'blue'}/>
      <p>  Загрузить изображение</p></button>
      <button onClick={() => {
           setWrapper('darkwrapper')
          setRemoveModal('remove__modal')

    }} className='mainmypage__header__change__modal__item'>
        <BsTrash3  size={20} color={'red'}/>
        <p> Удалить</p>
    </button>
</div>
  )
}

export default ChangeBackModal