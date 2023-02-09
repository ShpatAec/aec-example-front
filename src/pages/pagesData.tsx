import { routerType } from "../types";
import About from "./About";
import Home from "./Home";
import React from "react";

// @ts-ignore
const pagesData: routerType[] = [
    {
        path: "",
        element: <Home />,
        title: "home"
    },
    {
        path: "about",
        element: <About />,
        title: "about"
    }
];

export default pagesData;