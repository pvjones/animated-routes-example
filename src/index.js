import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Main from "./Main";

import "./styles.css";

function App() {
  return (
    <Router>
      <Main path="/*" />
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
