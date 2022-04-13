import "./HomePage.css";
import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Link className="header_title" to="/todos">
        Todos
      </Link>
    </>
  );
};

export default Homepage;
