import { MovieList } from "components/MovieList/MovieList";
import { Container, StyledSection } from "index.styled";
import React, { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearch } from "services/api";
import {
  SearchInput,
  SearchButton,
  SearchForm,
  Warning,
} from "./Search.styled";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("title");
  const [search, setSeatch] = useState(title || "");
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [searchNothing, setSearchNothing] = useState(false);
  const inputValue = useRef();

  const handleChange = event => {
    event.preventDefault();
    setSearchParams({ title: event.target.value });
    setSeatch(event.target.value);
  };

  useEffect(() => {
    const searchMovie = async () =>
      setSearchedMovie(await getSearch(inputValue.current.value.trim()));
    searchMovie();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    const getSearchedMovie = await getSearch(search);
    if (getSearchedMovie.total_results === 0) return setSearchNothing(true);
    setSearchedMovie(getSearchedMovie);
    setSearchNothing(false);
  };
  return (
    <StyledSection>
      <Container>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            ref={inputValue}
            type="text"
            value={title ?? ""}
            onChange={handleChange}
          ></SearchInput>
          <SearchButton type="submit">Search</SearchButton>
        </SearchForm>
        {searchNothing && (
          <Warning>
            We found nothing &#x1F62D; Please try againg with corret search
            value &#x1F609;
          </Warning>
        )}
        {searchedMovie.results !== undefined && !searchNothing && (
          <MovieList movie={searchedMovie.results} />
        )}
      </Container>
    </StyledSection>
  );
};

export default Search;
