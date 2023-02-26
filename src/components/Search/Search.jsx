import { MovieList } from "components/MovieList/MovieList";
import { Container, StyledSection } from "index.styled";
import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearch } from "services/api";
import { SearchInput, SearchButton, SearchForm } from "./Search.styled";

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("title");
  const [search, setSeatch] = useState(title || "");
  const [searchedMovie, setSearchedMovie] = useState([]);

  const handleChange = event => {
    event.preventDefault();
    setSearchParams({ title: event.target.value });
    setSeatch(event.target.value);
  };

  const searchMovie = async () => {
    setSearchedMovie(await getSearch(search));
  };

  useEffect(() => {
    searchMovie();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    searchMovie();
  };
  return (
    <StyledSection>
      <Container>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            type="text"
            value={title ?? ""}
            onChange={handleChange}
          ></SearchInput>
          <SearchButton type="submit">Search</SearchButton>
        </SearchForm>
        {searchedMovie.results !== undefined && (
          <MovieList movie={searchedMovie.results} />
        )}
      </Container>
    </StyledSection>
  );
};
