import React from "react";
import "../../styles/app.scss";

const JobCard = () => {

  return (
    <div className="job-card">

      <div className="job-details">
        <p className="company">AdaMarie</p>
        <p className="title">Senior Software Engineer, Frontend</p>
        <p className="posted">1 day ago</p>
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
