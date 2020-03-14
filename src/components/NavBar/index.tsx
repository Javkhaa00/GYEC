import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 55px;
  height: 35px;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > a {
    color: white;
    margin: 0 15px;
    outline: none;
    font-weight: 600;
    text-decoration: none;
  }
`;

function NavBar() {
  return (
    <Container>
      <Logo src="/assets/logo.png" />
      <Navigation>
        <a href="#home">Home</a>
        <a href="#about">About us</a>
        <a href="#product">Product</a>
        <a href="#contact">Contact us</a>
      </Navigation>
    </Container>
  );
}

export default NavBar;
