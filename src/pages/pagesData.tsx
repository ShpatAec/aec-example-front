import { routerType } from "../types";
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import React from "react";

// @ts-ignore
const pagesData: routerType[] = [
    {
        path: "Home",
        element: <Home />,
        title: "home"
    },
    {
        path: "about",
        element: <About />,
        title: "about"
    },
    {
        path: "/",
        element: <Login />,
        title: "login"
    }
];

export default pagesData;