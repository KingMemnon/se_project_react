import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
const AddItemModal = ({ activeModal, closeActiveModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    imageUrl: "",
    weather: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      weather: e.target.id,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    setFormData({ name: "", imageUrl: "", weather: "" });

    closeActiveModal();
  };

  return (
    <ModalWithForm
      title="New Garment"
      buttonText="Add Garment"
      isOpen={activeModal === "add-garment"}
      handleCloseClick={closeActiveModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>

      <label htmlFor="imageUrl" className="modal__label">
        Image{" "}
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={handleInputChange}
        />
      </label>

      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            id="hot"
            type="radio"
            className="modal__radio-input"
            name="weather"
            checked={formData.weather === "hot"}
            onChange={handleRadioChange}
          />
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            type="radio"
            className="modal__radio-input"
            name="weather"
            checked={formData.weather === "warm"}
            onChange={handleRadioChange}
          />
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            type="radio"
            className="modal__radio-input"
            name="weather"
            checked={formData.weather === "cold"}
            onChange={handleRadioChange}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
