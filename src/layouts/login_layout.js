import React from "react";
import { Outlet } from "react-router-dom";

const Login = () => {
  return (
    <>
      <main className="main" id="top">
        <div className="container-fluid p-0" data-layout="container">
          <div
            className="content"
            style={{
              backgroundImage:
                "url(" + require("../assets/images/corner-1.png") + ")",
              backgroundRepeat: "round",
              overflow: "hidden",
            }}
          >
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
