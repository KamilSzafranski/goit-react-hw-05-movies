import { Container } from "index.styled.js";
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { MenuStyled, StyledLink, Header } from "./Layout.styled.js";

export const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <MenuStyled>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/search">Movie</StyledLink>
          </MenuStyled>
        </Container>
      </Header>
      <Outlet />
    </>
  );
};
