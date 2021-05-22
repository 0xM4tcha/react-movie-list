const GeneralModal = ({imageUrl, isShow, closeModal}) => {
  return (
    <div className={`modal ${isShow ? 'is-active' : ''}`} data-testid="modal" title="modal" >
      <div className="modal-background" onClick={closeModal} title="button-backdrop" >
      </div>
      <div className="modal-content">
        <p className="image is-4by3">
          <img src={imageUrl} alt="image modal" data-testid="image" />
        </p>
      </div>
      <button className="modal-close is-large" data-testid="button" aria-label="close" onClick={closeModal}></button>
    </div>
  )
}

export default GeneralModal