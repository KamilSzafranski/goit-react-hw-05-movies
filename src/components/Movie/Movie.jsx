import { Container, StyledSection } from "index.styled";
import React, { useCallback, useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { getDetails } from "services/api";
import {
  BtnBack,
  MovieContainer,
  MovieTitle,
  MovieText,
  MovieImage,
  StyledLink,
} from "./Movie.styled";

const Movie = () => {
  const { elementId } = useParams();
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const goBack = location.state?.from ?? "/";

  const movieDetils = useCallback(async () => {
    setDetails(await getDetails(elementId));
  }, [elementId]);

  useEffect(() => {
    setIsLoading(true);
    movieDetils();

    setIsLoading(false);
  }, [movieDetils]);

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

      {!isLoading && (
        <StyledSection>
          <Container>
            <BtnBack to={goBack}>Go back</BtnBack>
            <MovieContainer>
              <MovieImage
                src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
              />
              <div>
                <MovieTitle>{details.title}</MovieTitle>
                <MovieText>
                  User Score: {Math.round(details.vote_average * 10)} %
                </MovieText>
                <MovieTitle>Overwiew</MovieTitle>
                <MovieText>{details.overview}</MovieText>
                <MovieTitle>Genres</MovieTitle>
                <MovieText>
                  {details?.genres?.map(element => element.name).join(" ")}
                </MovieText>
              </div>
            </MovieContainer>
            <div>
              <MovieTitle> Additional Information</MovieTitle>
              <StyledLink to="cast">Cast</StyledLink>
              <StyledLink to="reviews">Reviews</StyledLink>
            </div>
            <Outlet />
          </Container>
        </StyledSection>
      )}
    </>
  );
};

export default Movie;
