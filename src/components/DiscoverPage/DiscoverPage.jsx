import React from "react";
import styles from "./DiscoverPage.module.css";

const DiscoverPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles["first-half"]}>
        <div className={styles.icon}>
          <div className={styles["guitar-icon"]}>
            <img
              className={styles["icon-image"]}
              src={require("./../../assets/Images/guitar-instrument.png")}
            />
          </div>
          <p className={styles["icon-para"]}>MusicMentor</p>
        </div>
        <div className={styles.info}>
          <h2>Discover the World</h2>
          <p className={styles["text-larger"]}>
            Explore music theories, practice important techniques, and discover
            tips to master your instrument. Stay updated with the latest news.
          </p>
          <button className={styles["info-button"]}>Start learning</button>
        </div>
      </div>
      <div className={styles["second-half"]}>
        <img
          className={styles["second-half-img"]}
          src={require("./../../assets/Images/musician-image.jpeg")}
          alt="musician"
        />
      </div>
    </div>
  );
};

export default DiscoverPage;
