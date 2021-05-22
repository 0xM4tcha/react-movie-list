
const GeneralCard = ({image, title, subtitle, onClickImage, onClickDetail}) => {
  return (
    <div className="card" data-testid="card" >
      <div className="card-image" data-testid="click-image" onClick={onClickImage}>
        <figure className="image">
          <img src={image} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content" data-testid="click-detail" onClick={onClickDetail}>
        <div className="media">
          <div className="media-content">
            <p className="title is-6">{title}</p>
            <p className="subtitle is-6">{subtitle}</p>
          </div>
        </div>
        <div className="content">
        </div>
      </div>
    </div>
  )
}

export default GeneralCard