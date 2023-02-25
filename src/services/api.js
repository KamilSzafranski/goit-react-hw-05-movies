const API_KEY = "6013882f278a288901195e6aa884c4e8";
const API_URL_TRENDING = "https://api.themoviedb.org/3/trending/all/day?";

export const getTrendingToday = async () => {
  const params = new URLSearchParams({
    api_key: API_KEY,
  });
  try {
    const response = await fetch(`${API_URL_TRENDING}${params}`);
    if (!response.ok) throw new Error(response.statu);

    const trendingMovie = await response.json();
    return trendingMovie;
  } catch (error) {
    console.log(error);
  }
};
