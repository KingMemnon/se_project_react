import "./SideBar.css";
import "../Profile/Profile.css";
import avatar from "../../images/avatar.png";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <img className="sidebar__avatar" src={avatar} alt="User avatar" />
        <p className="sidebar__username">User Name</p>
      </div>
    </div>
  );
}

export default SideBar;
