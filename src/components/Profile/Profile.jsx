import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  clothingItems,
  onCardClick,
  activeModal,
  handleAddClick,
  closeActiveModal,
  weatherData,
}) {
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar />
      </section>
      <section className="profile__closet">
        <ClothesSection
          clothingItems={clothingItems}
          onCardClick={onCardClick}
          activeModal={activeModal}
          handleAddClick={handleAddClick}
          closeActiveModal={closeActiveModal}
          weatherData={weatherData}
        />
      </section>
    </div>
  );
}

export default Profile;
