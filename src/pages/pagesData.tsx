import { routerType } from "../types";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import AccountSettings from "./AccountSettings";
import PasswordSettings from "./PasswordSettings";
import Profile from "./Profile";
import React from "react";
// @ts-ignore
const pagesData: routerType[] = [
    {
        path: "Home",
        element: <Home/>,
        title: "home"
    },
    {
        path: "/",
        element: <Login/>,
        title: "login"
    },
    {
        path: "register",
        element: <Register/>,
        title: "register"
    },
    {
        path: "accountSettings",
        element: <AccountSettings/>,
        title: "accountSettings"
    },
];

export default pagesData;