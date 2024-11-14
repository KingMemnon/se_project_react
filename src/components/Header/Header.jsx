import "./Header.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.png";
function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <div className="header__meta-logo">
        <img className="header__logo" src={logo} alt="WTWR Logo" />
        <p className="header__meta">
          {currentDate},{weatherData.city}
        </p>
      </div>
      <div className="header__add-clothes">
        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-clothes-btn"
        >
          {" "}
          + Add Clothes
        </button>
        <div className="header__user-container">
          <p className="header__username">Terrence Tegegne</p>
          <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;
