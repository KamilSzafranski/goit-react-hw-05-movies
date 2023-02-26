import { Container } from "index.styled";
import React, { useCallback, useEffect, useState } from "react";
import { Title, ListItem } from "./Home.styled";
import { StyledSection } from "index.styled";
import { getTrendingToday } from "../../services/api.js";
import { element } from "prop-types";
import { NavLink } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

export const Home = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchmovie = useCallback(async () => {
    const movie = await getTrendingToday();
    setTrendingMovie(movie.results);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetchmovie();
    setIsLoading(false);
  }, [fetchmovie]);

  return (
    <>
      {isLoading && (
        <TailSpin
          height="160"
          width="160"
          color="#2196f3"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{
            paddingTop: "35vh",
            display: "flex",
            justifyContent: "center",
          }}
          wrapperClass="Spinner"
          visible={true}
        />
      )}

      <StyledSection>
        <Container>
          <Title>Trending today:</Title>
          <ul>
            {trendingMovie.map(element => (
              <NavLink key={element.id} to={`movie/${element.id}`}>
                <ListItem>{element.title ?? "No title yet"}</ListItem>
              </NavLink>
            ))}
          </ul>
        </Container>
      </StyledSection>
    </>
  );
};
