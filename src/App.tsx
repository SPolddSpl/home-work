import React, { useState } from "react";
import "./App.css";
import "rsuite/dist/styles/rsuite-default.css";
import "rsuite/dist/styles/rsuite-dark.css";
import Main from "./components/Main";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router hashType="noslash">
      <Main />
    </Router>
  );
}

export default App;
