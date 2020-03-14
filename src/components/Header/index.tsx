import React from 'react';
import styled from 'styled-components';

import NavBar from '@/components/NavBar';

const Container = styled.div`
  width: 100%;
  color: white;
  height: calc(100vw * 0.525716258198136);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: linear-gradient(
      to bottom,
      rgba(25, 172, 190, 0.4),
      rgba(25, 172, 190, 0.4)
    ),
    url('/assets/watch.png');

  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 15px;
  align-items: center;
  justify-content: space-around;
`;
const Title = styled.h1`
  font-style: normal;
  font-weight: 900;
  font-family: Raleway;
  margin-bottom: 40px;
  text-transform: uppercase;
`;

function Header() {
  return (
    <Container>
      <NavBar />
      <TitleContainer>
        <Title>Nani</Title>
        <Title>Tech</Title>
      </TitleContainer>
    </Container>
  );
}

export default Header;
