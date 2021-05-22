const GeneralCardDetail = ({image, details}) => {
  return (
    <div className="box" data-testid="box-wrapper">
      <article className="media">
        <div className="media-left">
          <figure className="image is-128x128px">
            <img src={image} alt="Image" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content" title="list-details">
            {
              details && details.map((item, index) => (
                <div key={index} >
                  <p> {item.label} : {item.value} </p>
                </div>
              ))
            }
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <a className="level-item" aria-label="reply">
                <span className="icon is-small">
                  <i className="fas fa-reply" aria-hidden="true"></i>
                </span>
              </a>
              <a className="level-item" aria-label="retweet">
                <span className="icon is-small">
                  <i className="fas fa-retweet" aria-hidden="true"></i>
                </span>
              </a>
              <a className="level-item" aria-label="like">
                <span className="icon is-small">
                  <i className="fas fa-heart" aria-hidden="true"></i>
                </span>
              </a>
            </div>
          </nav>
        </div>
      </article>
    </div>
  )
}

export default GeneralCardDetail