import { CastContainer, CastItem, CastText, CastImage } from "./Cast.styled";
import { TailSpin } from "react-loader-spinner";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "services/api";

export const Cast = () => {
  const { elementId } = useParams();

  const [cast, setCast] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const movieCast = useCallback(
    async () => setCast(await getCast(elementId)),
    []
  );

  useEffect(() => {
    setIsLoading(true);
    movieCast();

    setIsLoading(false);
  }, [movieCast]);

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
        <CastContainer>
          {cast?.cast?.map(element => {
            const isPosterAvaible =
              element.profile_path === null
                ? `https://static.thenounproject.com/png/3674270-200.png`
                : `https://image.tmdb.org/t/p/w500/${element.profile_path}`;
            return (
              <CastItem key={element.id}>
                <CastImage src={isPosterAvaible} />
                <CastText>{element.name}</CastText>
              </CastItem>
            );
          })}
        </CastContainer>
      )}
    </>
  );
};
