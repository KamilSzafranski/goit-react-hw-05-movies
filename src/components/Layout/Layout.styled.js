import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  background-color: #2196f3;
  color: white;
`;

export const MenuStyled = styled.nav`
  padding: 10px 0;
  display: flex;
  justify-content: center;
  gap: 20px;
  text-transform: uppercase;
  font-weight: 700;
`;

export const StyledLink = styled(NavLink)`
  cursor: pointer;
  transition: transform 300ms ease-in;
  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;
