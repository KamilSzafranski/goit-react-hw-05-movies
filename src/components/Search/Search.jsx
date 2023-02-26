import { MovieList } from "components/MovieList/MovieList";
import { Container, StyledSection } from "index.styled";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearch } from "services/api";
import { SearchInput, SearchButton, SearchForm } from "./Search.styled";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("title");
  const [search, setSeatch] = useState(title || "");
  const [searchedMovie, setSearchedMovie] = useState([]);

  const handleChange = event => {
    event.preventDefault();
    setSearchParams({ title: event.target.value });
    setSeatch(event.target.value);
  };

  useEffect(() => {
    const searchMovie = async () => setSearchedMovie(await getSearch(search));
    searchMovie();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = async e => {
    e.preventDefault();
    setSearchedMovie(await getSearch(search));
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

export default Search;
