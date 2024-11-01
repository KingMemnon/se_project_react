import "./ItemModal.css";

function ItemModal({ activeModal, card }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={handleCloseClick}
          className="modal__close"
          type="button"
        >
          Close
        </button>
        <img.modal__image src={card.link} alt={card.name} />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">{card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
