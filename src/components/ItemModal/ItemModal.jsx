import "./ItemModal.css";
import closeButtonImage from "../../images/closebutton.svg";

function ItemModal({ activeModal, card, handleCloseClick }) {
  return (
    <div className="modal__clothing-type">
      <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
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
          <img className="modal__image" src={card.link} alt={card.name} />
          <div className="modal__footer">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
