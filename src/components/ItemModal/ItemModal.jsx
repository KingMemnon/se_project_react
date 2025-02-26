import "./ItemModal.css";
import closeButtonImage from "../../images/closebutton.svg";

function ItemModal({ card, handleCloseClick, isOpen, openConfirmationModal }) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={handleCloseClick}
          className="modal__close"
          type="button"
        >
          <img
            className="modal__close-icon"
            src={closeButtonImage}
            alt="Close Button"
          />
        </button>
        <img className="modal__image" src={card.imageUrl} alt={card.name} />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
          <button
            className="modal__delete"
            onClick={() => openConfirmationModal(card)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
