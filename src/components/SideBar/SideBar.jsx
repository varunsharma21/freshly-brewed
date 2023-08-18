import React from "react";
import "./SideBar.css";
import user from "./../../assets/Images/user.jpeg";
import menu from "./../../assets/Images/menu.png";
import verify from "./../../assets/Images/verify.png";
import people from "./../../assets/Images/people.png";
import settings from "./../../assets/Images/settings.png";
import logout from "./../../assets/Images/logout.png";
import notes from "./../../assets/Images/notes.png";

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul className="first-list">
        <li>
          <img className="profile-picture" src={user} alt="User" />
        </li>
        <li className="menu">
          <img src={menu} alt="Menu" />
        </li>
      </ul>
      <ul className="second-list">
        <li>
          <img src={verify} />
        </li>
        <li>
          <img src={people} />
        </li>
        <li>
          <img src={notes} />
        </li>
      </ul>
      <hr />
      <ul className="third-list">
        <li>
          <img src={settings} />
        </li>
        <li>
          <img src={logout} />
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
