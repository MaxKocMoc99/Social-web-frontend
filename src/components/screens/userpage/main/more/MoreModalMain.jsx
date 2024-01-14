import {AiOutlineGift,AiOutlineHome} from 'react-icons/ai'
const MoreModalMain = ({u}) => {
  return (
      <div className="mainmypage__more__main">
          <div className="mainmypage__more__main__birthncity">
              <div>
                  <AiOutlineGift size={22} color="gray"/>
                  <p>День рождения: <span>{u.birth}</span></p>
              </div>
              <div>
                  <AiOutlineHome size={22} color="gray"/>
                  <p>Город: <span>{u.city}</span></p>
              </div>
          </div>
          <div className="mainmypage__more__main__social">
              <div>
                  <p>{u.friends.length}</p>
                  <p>друзей</p>
              </div>
              <div>
                  <p>{u.myGroups.length}</p>
                  <p>сообществ</p>
           </div>
          </div>
      </div>
  )
}

export default MoreModalMain