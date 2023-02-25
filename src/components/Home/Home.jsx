import { Container } from "index.styled";
import React, { useCallback, useEffect, useState } from "react";
import { Title, ListItem } from "./Home.styled";
import { StyledSection } from "index.styled";
import { getTrendingToday } from "../../services/api.js";
import { element } from "prop-types";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);

  const fetchmovie = useCallback(async () => {
    const movie = await getTrendingToday();
    setTrendingMovie(movie.results);
  }, []);

  useEffect(() => {
    fetchmovie();
  }, [fetchmovie]);

  return (
    <StyledSection>
      <Container>
        <Title>Trending today:</Title>
        <ul>
          {trendingMovie.map(element => (
            <NavLink to={`movie/${element.id}`}>
              <ListItem key={element.id}>
                {element.title ?? "No title yet"}
              </ListItem>
            </NavLink>
          ))}
        </ul>
      </Container>
    </StyledSection>
  );
};
