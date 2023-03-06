import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";
import Navbar from "./pages/Navbar";
import React from "react";

const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
  return (
    <div className={`h-full w-full mx-auto py-2 ${darkMode ? "dark" : ""}`}>
      <BrowserRouter>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Router />
      </BrowserRouter>
    </div>
  );
};

export default App;
