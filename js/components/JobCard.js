import React from "react";
import "../../styles/app.scss";

const JobCard = () => {

  return (
    <div className="job-card">
      <p className="company">Company</p>
      <p className="title">Senior Software Engineer, Frontend</p>
      <p className="posted">1 day ago</p>

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
