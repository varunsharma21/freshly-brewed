import React from "react";
import "./DiscoverPage.css";

const DiscoverPage = () => {
  return (
    <div className="container">
      <div className="first-half">
        <div className="icon">
          <div className="guitar-icon">
            <img
              className="icon-image"
              src={require("./../../assets/Images/guitar-instrument.png")}
            />
          </div>
          <p className="icon-para">MusicMentor</p>
        </div>
        <div className="info">
          <h2>Discover the World</h2>
          <p className="text-larger">
            Explore music theories, practice important techniques, and discover
            tips to master your instrument. Stay updated with the latest news.
          </p>
          <button className="info-button">Start learning</button>
        </div>
      </div>
      <div className="second-half">
        <img
          className="second-half-img"
          src={require("./../../assets/Images/musician-image.jpeg")}
          alt="musician"
        />
      </div>
    </div>
  );
};

export default DiscoverPage;
