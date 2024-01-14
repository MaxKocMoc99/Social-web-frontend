const PhotosGallery = ({gallery}) => {
  return (
    <div className="photos__gallery">
       {gallery.map(image => (
        <img key={image.id} className="photos__gallery__item" src={image.src} alt="" />
      ))}
    </div>
  )
}

export default PhotosGallery