import { routerType } from "../types";
import About from "./About";
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
    {
        path: "passwordSettings",
        element: <PasswordSettings/>,
        title: "passwordSettings"
    },
    {
        path: "profile",
        element: <Profile/>,
        title: "profile"
    }

];

export default pagesData;