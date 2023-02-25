import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Movie = () => {
  return (
    <div>
      {" "}
      movie
      <NavLink to={"cast"}>
        {" "}
        <p>eee</p>
      </NavLink>
      <Outlet />
    </div>
  );
};
