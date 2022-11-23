import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/style.css";
import App from "./components/App";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Article from "./components/Article";
import Books from "./components/Books";
import People from "./components/People";
import Help from "./components/Help";
import Sidebar from "./components/Sidebar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <div className="container">
        <Sidebar />
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Article">
          <Article />
        </Route>
        <Route path="/People">
          <People />
        </Route>
        <Route path="/Books">
          <Books />
        </Route>
        <Route path="/Help">
          <Help />
        </Route>
        <Route path="/" exact>
          <App />
        </Route>
      </div>
    </React.StrictMode>
  </BrowserRouter>
);
