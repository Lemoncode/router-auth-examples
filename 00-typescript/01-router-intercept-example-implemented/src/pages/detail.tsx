import React from "react";
import { Link } from "react-router-dom";

export const DetailPage: React.FC = () => {
  return (
    <>
      <h1>Hello From Detail Page</h1>
      <Link to="/list">Navigate back to list</Link>
    </>
  );
};
