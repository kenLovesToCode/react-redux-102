import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="app">
      <Router>
        <HomePage />
      </Router>
    </div>
  );
}

export default App;
