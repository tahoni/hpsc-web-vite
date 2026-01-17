/**
 * Entry point for the HPSC Web (Vite + React) application.
 *
 * This module bootstraps the React 19 application, wires up React Router,
 * and renders the root <App /> component. See README.md for development
 * and build instructions. Licensed under the terms in LICENCE.md.
 *
 * @module
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
