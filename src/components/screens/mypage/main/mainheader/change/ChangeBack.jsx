import ChangeBackButton from './ChangeBackButton'
import ChangeBackModal from './ChangeBackModal'
import {useState } from 'react'
import ChangeAddModal from './add/ChangeAddModal'
import ChangeRemoveModal from './remove/ChangeRemoveModal'
const ChangeBack = ({background}) => {
    const [changeModal, setChangeModal] = useState('none')
    const [addModal, setAddModal] = useState('none')
    const [removeModal, setRemoveModal] = useState('none')
    return (
        <div className="mainmypage__header__block">
        {background ? <img className="mainmypage__header__block__img" src={background}/> : ''}
        <div className="mainmypage__header__block__change">
            <ChangeBackButton setChangeModal={setChangeModal} changeModal={changeModal}/>
            <ChangeBackModal addModal={addModal} setAddModal={setAddModal}  removeModal={removeModal} setRemoveModal={setRemoveModal} changeModal={changeModal} />
            <ChangeAddModal setChangeModal={setChangeModal} addModal={addModal} setAddModal={setAddModal} />
            <ChangeRemoveModal removeModal={removeModal} setRemoveModal={setRemoveModal}/>
            </div>
            </div>
  )
}

export default ChangeBack