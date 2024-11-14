import "./ModalWithForm.css";
import closeButtonImage from "../../images/closebutton.svg";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  handleCloseClick,
}) {
  return (
    <div className={`modal ${activeModal === "add-garment" && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={handleCloseClick} className="modal__close">
          <img
            className="modal__close-icon"
            src={closeButtonImage}
            alt="Close Button"
          />
        </button>
        <form className="modal__form">
          {children}
          <button type="Submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
