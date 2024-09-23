// Date() object: javascript
// const currentDate = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });
function Header() {
  return (
    <header>
      <img className="header__logo" />
      <p className="header__meta">DATE,LOCATION</p>
      <button className="header__button"> + Add Clothes</button>
      <div className="header__user-container">
        <p className="header__username">NAME</p>
        <img src="" alt="" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
