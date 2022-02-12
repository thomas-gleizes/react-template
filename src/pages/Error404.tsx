import React from "react";
import { Navigate } from "react-router-dom";

const Error404: React.FC = () => {
  return <Navigate to="/" />;
};

export default Error404;
