import {AiOutlineGift,AiOutlineHome} from 'react-icons/ai'
const MoreModalMain = ({birth, city, myGroupsLength, friendsLength}) => {
  return (
      <div className="mainmypage__more__main">
          <div className="mainmypage__more__main__birthncity">
              <div>
                  <AiOutlineGift size={22} color="gray"/>
                  <p>День рождения: <span>{birth}</span></p>
              </div>
              <div>
                  <AiOutlineHome size={22} color="gray"/>
                  <p>Город: <span>{city}</span></p>
              </div>
          </div>
          <div className="mainmypage__more__main__social">
              <div>
                  <p>{friendsLength}</p>
                  <p>друзей</p>
              </div>
              <div>
                  <p>{myGroupsLength}</p>
                  <p>сообществ</p>
           </div>
          </div>
      </div>
  )
}

export default MoreModalMain