import { Movie } from "components/Movie/Movie";

const API_KEY = "6013882f278a288901195e6aa884c4e8";
const API_URL_TRENDING = "https://api.themoviedb.org/3/trending/all/day?";
const API_URL_DETAILS = "https://api.themoviedb.org/3/movie/";

const params = new URLSearchParams({
  api_key: API_KEY,
});

export const getTrendingToday = async () => {
  try {
    const response = await fetch(`${API_URL_TRENDING}${params}`);
    if (!response.ok) throw new Error(response.statu);

    const trendingMovie = await response.json();
    return trendingMovie;
  } catch (error) {
    console.log(error);
  }
};

export const getDetails = async movieID => {
  const response = await fetch(`${API_URL_DETAILS}${movieID}?${params}`);
  const movieDetail = await response.json();
  return movieDetail;
};

export const getCast = async movieID => {
  const response = await fetch(
    `${API_URL_DETAILS}${movieID}/credits?${params}`
  );
  const movieCast = await response.json();
  return movieCast;
};

export const getReviews = async movieID => {
  const response = await fetch(
    `${API_URL_DETAILS}${movieID}/reviews?${params}`
  );
  const movieReview = await response.json();
  return movieReview;
};
