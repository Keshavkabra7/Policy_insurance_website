import React from "react";
import Sidepanel from "./Sidepanel";
import { Outlet } from "react-router-dom";
import CustomerLoginPage from "../CustomerLoginPage";
// import ApllicationRead from './ApllicationRead'
const auth = localStorage.getItem("user");

const UserLayout = () => {
  return (
    <>
      <div className="w-screen min-h-screen">
        <Sidepanel></Sidepanel>
        
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default UserLayout;
