import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import WowProject from "./WowProject";
import About from "./Project Component/About";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>


    {/* <WowProject></WowProject> */}
    <App></App>
    
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
