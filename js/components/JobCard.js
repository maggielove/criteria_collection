import React from "react";
import "../../styles/app.scss";

const JobCard = () => {

  return (
    <div className="job-card">

      <div className="job-details">
        <p className="company">Mira Nair</p>
        <p className="title">Mississippi Masala</p>
        <p className="year">1991</p>
      </div>

      <div className="badge-container">
        <div className="language">TypeScript</div>
        <div className="language">Tailwind</div>
        <div className="experience">Senior</div>
        <div className="role">Frontend</div>
      </div>
    </div>
  );
}

export default JobCard;
