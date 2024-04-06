// TODO change to index.ts
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./js/components/App.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

// Todo play around with routing
const appRouting = (
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
    </Routes>
  </Router>
);

root.render(appRouting);
