import React, { useEffect } from "react";
import FilterBar from "./FilterBar";
import JobCard from "./JobCard";
import axios from "axios";

const App = () => {
  useEffect(() => {
    fetch('/api/films')
    .then(res => res.json())
    .then(data => console.log(data))
  }, []);

   return (
     <>
      <FilterBar />
      <JobCard />
     </>
   );
};

export default App;
