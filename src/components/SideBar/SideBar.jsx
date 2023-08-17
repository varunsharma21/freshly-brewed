import React from "react";
import "./SideBar.css";
import Varun from "./../../assets/Images/varun-park.jpg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <img src={Varun} alt="User" />
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
