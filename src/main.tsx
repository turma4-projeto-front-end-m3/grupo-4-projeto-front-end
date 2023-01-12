import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { RecipesProvider } from "./contexts/RecipesContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer />
      <UserProvider>
        <RecipesProvider>
          <App />
        </RecipesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
