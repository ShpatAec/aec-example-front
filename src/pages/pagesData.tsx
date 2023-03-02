import { routerType } from "../types";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import BoardAdmin from "./BoardAdmin";
import BoardUser from "./BoardUser";
import BoardModerator from "./BoardModerator";
import AccountSettings from "./AccountSettings";
import AutoportSettings from "./AutoportSettings";
import React from "react";
// @ts-ignore
const pagesData: routerType[] = [
  {
    path: "Home",
    element: <Home />,
    title: "home",
  },
  {
    path: "accountSettings",
    element: <AccountSettings />,
    title: "accountSettings",
  },
  {
    path: "/",
    element: <Login />,
    title: "login",
  },
  {
    path: "register",
    element: <Register />,
    title: "register",
  },
  {
    path: "profile",
    element: <AccountSettings />,
    title: "profile",
  },
  {
    path: "admin",
    element: <BoardAdmin />,
    title: "admin",
  },
  {
    path: "user",
    element: <BoardUser />,
    title: "user",
  },
  {
    path: "mod",
    element: <BoardModerator />,
    title: "mod",
  },
  {
    path: "autoportSettings",
    element: <AutoportSettings/>,
    title: "autoportSettings"
  },
];

export default pagesData;