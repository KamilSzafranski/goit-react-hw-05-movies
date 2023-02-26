import React from "react";
import { ListItem } from "./MovieList.styled";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export const MovieList = ({ movie }) => {
  const location = useLocation();
  return (
    <ul>
      {movie.map(element => (
        <NavLink
          key={element.id}
          to={`/movie/${element.id}`}
          state={{ from: location }}
        >
          <ListItem>{element.title ?? "No title yet"}</ListItem>
        </NavLink>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movie: PropTypes.array.isRequired,
};
