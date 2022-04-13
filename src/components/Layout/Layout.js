import "./Layout.css";
import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/todos">Todos</NavLink>
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer>
        <p className="footer_year">2022</p>
      </footer>
    </>
  );
};

export default Layout;
