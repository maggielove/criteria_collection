import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./js/components/App.js";

const container = document.getElementById("root");
const root = createRoot(container);
// import "./styles.scss";

// Todo play around with routing
// const appRouting = (
//   <Router>
//     <Routes>
//       <Route exact path="/" component={App} />
//     </Routes>
//   </Router>
// );

root.render(<App />);
