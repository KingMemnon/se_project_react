import "./ClothesSection.css";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemCard from "../ItemCard/ItemCard";

function ClothesSection({
  onCardClick,
  clothingItems,
  activeModal,
  handleAddClick,
  closeActiveModal,
}) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__title">Your Closet</p>
        <button className="clothes-section__bttn" onClick={handleAddClick}>
          + Add new
        </button>
      </div>
      <ul className="clothes-section__closet">
        {clothingItems.map((item) => {
          return (
            <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
          );
        })}
      </ul>
      {activeModal === "add-garment" && (
        <AddItemModal
          activeModal={activeModal}
          closeActiveModal={closeActiveModal}
        />
      )}
    </div>
  );
}

export default ClothesSection;
