// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { useAmp } from 'next/amp';

const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 550px) {
    padding: 0 10px;
  }
`;
const Logo = styled.img`
  width: 55px;
  height: 35px;
  @media screen and (max-width: 550px) {
    width: 30px;
    height: 20px;
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
    @media screen and (max-width: 550px) {
      margin: 0 5px;
      font-size: 0.7rem;
    }
  }
`;

function NavBar() {
  const amp = useAmp();
  return (
    <Container>
      <a href="#home">
        {amp ? (
          <amp-img alt="Logo" height="35" width="55" src="/assets/logo.png" />
        ) : (
          <Logo alt="Logo" src="/assets/logo.png" />
        )}
      </a>
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
