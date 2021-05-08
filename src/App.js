import React from "react";

import "./App.css";
import Profile from "./components/profile";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <i id="icon" className="fa fa-github"></i>
        <h1>GitHub Users Finder</h1>
      </div>

      <Profile />
    </div>
  );
}

export default App;
