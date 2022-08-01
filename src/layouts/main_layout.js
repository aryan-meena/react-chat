import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { MainContainer } from "../components/LayoutComponents";
import Navbar from "../components/Navbar";
import Setting from "../components/Setting";
import Topnavbar from "../components/Topnavbar";

const Main = () => {
  return (
    <>
      <MainContainer>
        <Navbar />
        <div className="content">
          <Topnavbar />
          <Outlet />
          <Footer />
        </div>
      </MainContainer>
      <Setting />
    </>
  );
};

export default Main;
