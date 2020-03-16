import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > a {
    color: white;
    margin: 0 15px;
    font-weight: 600;
  }
`;

function NavBar() {
  return (
    <Container>
      <Navigation>
        <a href="#home">Home</a>
        <a href="#product">Product</a>
        <a href="#about">About us</a>
        <a href="#contact">Contact us</a>
      </Navigation>
    </Container>
  );
}

export default NavBar;
