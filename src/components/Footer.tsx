import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const Container = styled.div`
  color: white;
  width: 100%;
  height: 80px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  background-color: var(--dark-color);
  > p {
    display: block;
    font-size: 1rem;
    @media screen and (max-width: 550px) {
      font-size: 0.8rem;
      width: 100px;
    }
  }
`;

function Footer() {
  return (
    <Container>
      <p>{`© ${new Date().getFullYear()} by Nani Tech • Startup`}</p>
      <Logo />
      <p>Made with love by Gayboi</p>
    </Container>
  );
}

export default Footer;
