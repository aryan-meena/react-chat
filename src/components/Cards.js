import React from "react";

export const Card = ({ children = null, extraClass = null }) => {
  return <div className={`card ${extraClass}`}>{children}</div>;
};

export const CardHeader = ({ children = null, extraClass = null }) => {
  return <div className={`card-header bg-light ${extraClass}`}>{children}</div>;
};

export const CardBody = ({ children = null, extraClass = null }) => {
  return <div className={`card-body ${extraClass}`}>{children}</div>;
};

export const CardFooter = ({ children = null, extraClass = null }) => {
  return <div className={`card-footer bg-light ${extraClass}`}>{children}</div>;
};
