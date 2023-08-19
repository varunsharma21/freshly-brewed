import React from "react";
import styles from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles["first-list"]}>
        <li>
          <img
            className={styles["profile-picture"]}
            src={require("./../../assets/Images/user.jpeg")}
            alt="User"
          />
        </li>
        <li className={styles.menu}>
          <img src={require("./../../assets/Images/menu.png")} alt="Menu" />
        </li>
      </ul>
      <ul className={styles["second-list"]}>
        <li>
          <img src={require("./../../assets/Images/verify.png")} />
        </li>
        <li>
          <img src={require("./../../assets/Images/people.png")} />
        </li>
        <li>
          <img src={require("./../../assets/Images/notes.png")} />
        </li>
      </ul>
      <hr />
      <ul className={styles["third-list"]}>
        <li>
          <img src={require("./../../assets/Images/settings.png")} />
        </li>
        <li>
          <img src={require("./../../assets/Images/logout.png")} />
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
