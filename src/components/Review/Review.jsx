import { TailSpin } from "react-loader-spinner";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "services/api";
import { ReviewTitle, ReviewText } from "./Review.styled";

export const Review = () => {
  const { elementId } = useParams();

  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const movieReview = useCallback(
    async () => setReview(await getReviews(elementId)),
    []
  );

  useEffect(() => {
    setIsLoading(true);
    movieReview();
    setIsLoading(false);
    console.log(review?.results?.lenght);
  }, [movieReview]);

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
        <ul>
          {review?.results?.lenght === undefined ? (
            <ReviewTitle>No review</ReviewTitle>
          ) : (
            review?.results?.map(element => {
              return (
                <li key={element.id}>
                  <ReviewTitle>{element.author}</ReviewTitle>
                  <ReviewText>{element.content}</ReviewText>
                </li>
              );
            })
          )}
        </ul>
      )}
    </>
  );
};
