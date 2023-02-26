import { NavLink } from "react-router-dom";
import styled from "styled-components";

const BtnBack = styled(NavLink)`
  margin: 0 auto;
  margin-bottom: 25px;
  display: block;
  align-items: center;
  text-align: center;
  padding: 5px 10px;
  width: 100px;
  font-weight: 700;
  font-size: 12px;
  background-color: #2196f3;
  color: white;
  border: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  cursor: pointer;
`;

const MovieContainer = styled.div`
  margin-bottom: 25px;
  display: flex;
  gap: 25px;
`;

const MovieTitle = styled.h4`
  margin-bottom: 10px;
  border-bottom: 2px solid #2196f3;
`;

const MovieText = styled.p`
  margin-bottom: 25px;
  font-size: 18px;
`;

const MovieImage = styled.img`
  height: 400px;
`;

const StyledLink = styled(NavLink)`
  margin-bottom: 10px;
  display: block;
  font-size: 18px;
  transition: color 300ms ease-in;
  cursor: pointer;
  &:last-child {
    margin-bottom: 25px;
  }
  &:hover,
  &:focus {
    color: #2196f3;
  }
`;

export {
  BtnBack,
  MovieContainer,
  MovieTitle,
  MovieText,
  MovieImage,
  StyledLink,
};
