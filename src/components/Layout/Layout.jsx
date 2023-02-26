import { Container } from "index.styled.js";
import React, { Fragment, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { MenuStyled, StyledLink, Header } from "./Layout.styled.js";

const Layout = () => {
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
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
