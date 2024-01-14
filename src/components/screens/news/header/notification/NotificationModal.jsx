import NotificationModalItem from "./NotificationModalItem"
const NotificationModal = ({ notificationModal , notifications, name, surname, photo, id, friends}) => {
  return (
    <div className={notificationModal}>
      <div  className="notification__modal__header">Ваша страница</div>
      <div className="notification__modal__main">
        {notifications.map(n => (
          <NotificationModalItem friends={friends} id={id} surname={surname} photo={photo} name={name} key={n.id} n={n} me={me}/>
        ))}
      </div>
      <div className="notification__modal__footer"></div>
      </div>
  )
}

export default NotificationModal