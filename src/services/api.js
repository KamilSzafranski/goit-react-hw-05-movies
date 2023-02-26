const API_KEY = "6013882f278a288901195e6aa884c4e8";
const API_URL_TRENDING = "https://api.themoviedb.org/3/trending/all/day?";
const API_URL_DETAILS = "https://api.themoviedb.org/3/movie/";
const API_URL_SEARCH = "https://api.themoviedb.org/3/search/movie?";

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
  try {
    const response = await fetch(`${API_URL_DETAILS}${movieID}?${params}`);
    if (!response.ok) throw new Error(response.statu);

    const movieDetail = await response.json();
    return movieDetail;
  } catch (error) {
    console.log(error);
  }
};

export const getCast = async movieID => {
  try {
    const response = await fetch(
      `${API_URL_DETAILS}${movieID}/credits?${params}`
    );
    if (!response.ok) throw new Error(response.statu);
    const movieCast = await response.json();
    return movieCast;
  } catch (error) {
    console.log(error);
  }
};

export const getReviews = async movieID => {
  try {
    const response = await fetch(
      `${API_URL_DETAILS}${movieID}/reviews?${params}`
    );
    if (!response.ok) throw new Error(response.statu);
    const movieReview = await response.json();
    return movieReview;
  } catch (error) {
    console.log(error);
  }
};

export const getSearch = async search => {
  try {
    const response = await fetch(`${API_URL_SEARCH}${params}&query=${search}`);
    if (!response.ok) throw new Error(response.statu);
    const movieSearch = await response.json();
    return movieSearch;
  } catch (error) {
    console.log(error);
  }
};
