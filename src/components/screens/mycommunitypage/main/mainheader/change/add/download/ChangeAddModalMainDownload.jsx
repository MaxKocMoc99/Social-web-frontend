import { useContext } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import { WrapperContext } from '../../../../../../../context/Wrapper'
import axios from 'axios'
const ChangeAddModalMainDownload = ({setAddModal, setChangeModal, g }) => {
  const {setWrapper, setUserBackground} = useContext(WrapperContext)
  const addImage = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onloadend = async () => {
      await axios.post("http://localhost:8080/myGroups/changeBackground", {
        id: g.id,
        photo: '',
        groupId: g.routingId
      })
  }
    reader.readAsDataURL(file)
    setAddModal('none')
    setWrapper('wrapper')
    setChangeModal('none')
  } 
  return (
    <div className="add__modal__main__download">
      <AiOutlinePlus color='blue' size={30} />
      <p>Загрузить обложку</p>
      <div className="add__modal__main__download__recommend">
        Рекомендуемое расширение 1920 * 768 <br />
        Формат - JPEG, WEBP, или PNG
      </div>
      <input type='file' onChange={addImage}/>
    </div>
  )
}

export default ChangeAddModalMainDownload