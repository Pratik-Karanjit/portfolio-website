import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>


    {/* <WowProject></WowProject> */}
    <App></App>
    
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
