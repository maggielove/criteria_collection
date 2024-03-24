import React from "react";
import "../../styles/app.scss";

const JobCard = ({ title, director, decade, image }) => {

  return (
    <div className="film-card">
      <div className="image-container">
        <img src={image} />
      </div>

      <div className="film-details">
        <p className="director">{director}</p>
        <p className="title">{title}</p>
      </div>

      <p className="year">{decade}</p>
    </div>
  );
}

export default JobCard;
