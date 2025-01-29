import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { coordinates, APIkey } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";

import Footer from "../Footer/Footer";
import { getWeather, processWeatherData } from "../../utils/weatherApi";
import AddItemModal from "../AddItemModal/AddItemModal";
import { getitems } from "../../utils/api";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [cardToDelete, setCardToDelete] = useState({});

  console.log(clothingItems);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleAddItem = (newItem) => {
    fetch("http://localhost:3001/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...newItem, _id: Date.now() }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to add item");
        }
        return res.json();
      })
      .then((data) => {
        setClothingItems((prevItems) => [...prevItems, data]);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const openConfirmationModal = (card) => {
    setActiveModal("confirm");
    setCardToDelete(card);
  };

  const handleDeleteCard = (card) => {
    fetch(`http://localhost:3001/items/${card._id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          console.log("Item deleted");
        }
        return res.json();
      })
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item._id !== card._id)
        );
        setActiveModal("");
        setCardToDelete(null);
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
        setActiveModal("");
        setCardToDelete(null);
      });
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };
  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const processData = processWeatherData(data);
        setWeatherData(processData);
      })
      .catch((error) => {
        console.error("Failed to fetch weather data:", error);
        setWeatherData({
          type: "unknown",
          temp: { F: "N/A", C: "N/A" },
          city: "Unknown",
        });
      });
  }, []);

  useEffect(() => {
    getitems()
      .then((data) => {
        console.log(data);
        setClothingItems(data);
      })
      .catch((error) => {
        console.error("Failed to fetch clothing items:", error);
        setClothingItems([]);
      });
  }, []);

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                  currentTemperatureUnit={currentTemperatureUnit}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  clothingItems={clothingItems}
                  onCardClick={handleCardClick}
                  activeModal={activeModal}
                  handleAddClick={handleAddClick}
                  closeActiveModal={closeActiveModal}
                  weatherData={weatherData}
                />
              }
            />
          </Routes>

          <Footer />
        </div>

        {activeModal === "add-garment" && (
          <AddItemModal
            activeModal={activeModal}
            closeActiveModal={closeActiveModal}
            handleAddItem={handleAddItem}
          />
        )}

        {activeModal === "preview" && (
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            isOpen={activeModal === "preview"}
            handleCloseClick={closeActiveModal}
            openConfirmationModal={openConfirmationModal}
          />
        )}
        {activeModal === "confirm" && (
          <DeleteConfirmationModal
            card={cardToDelete}
            isOpen={activeModal === "confirm"}
            handleCloseClick={closeActiveModal}
            handleCardDelete={handleDeleteCard}
          />
        )}
        <ModalWithForm />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
