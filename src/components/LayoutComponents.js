import React from "react";

export const MainContainer = ({ children }) => {
  return (
    <main className="main" id="top">
      <div className="container-fluid" data-layout="container">
        {children}
      </div>
    </main>
  );
};

export const Row = ({ children = null, extraClass = null }) => {
  return (
    <div className={`row  ${extraClass}`} data-layout="container">
      {children}
    </div>
  );
};
