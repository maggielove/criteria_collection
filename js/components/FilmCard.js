import React from "react";
import "../../styles/app.scss";

const JobCard = ({ title, director, decade }) => {

  return (
    <div className="film-card">

      <div className="job-details">
        <p className="company">Director: {director}</p>
        <p className="title">{title}</p>
        <p className="year">Decade: {decade}</p>
      </div>

      <div className="badge-container">
      </div>
    </div>
  );
}

export default JobCard;
