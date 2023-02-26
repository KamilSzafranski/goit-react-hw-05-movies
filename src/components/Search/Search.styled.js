import styled from "styled-components";

export const SearchInput = styled.input`
  width: 300px;
  display: block;
  padding: 7px 0 7px 8px;
  color: black;
  font-size: 16px;
  line-height: 1.25;
  border: 1px solid black;
  border-radius: 4px;
  outline: none;
`;

export const SearchButton = styled.button`
  display: block;
  align-items: center;
  padding: 5px 10px;
  font-weight: 700;
  font-size: 24px;
  background-color: #2196f3;
  color: white;
  border: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  cursor: pointer;
`;

export const SearchForm = styled.form`
  margin-bottom: 25px;
  display: flex;
  gap: 10px;
  align-items: center;
`;
