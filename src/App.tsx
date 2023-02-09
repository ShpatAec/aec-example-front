import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";
import Navbar from "./pages/Navbar"

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Router />
        </BrowserRouter>
    );
};

export default App;

