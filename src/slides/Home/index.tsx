import React from 'react';
import styled from 'styled-components';

import Arrow from '@/components/Arrow';
import NavBar from '@/components/NavBar';

const Container = styled.section`
  width: 100%;
  color: white;
  height: var(--slide-height);
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
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0 15px;
  align-items: center;
  justify-content: space-around;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-style: normal;
  font-weight: 900;
  font-family: Raleway;
  margin-bottom: 40px;
  text-transform: uppercase;
`;

const ArrowContainer = styled.a`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: center;
`;

function Home() {
  return (
    <Container id="home">
      <NavBar />
      <TitleContainer>
        <Title>Nani</Title>
        <Title>Tech</Title>
      </TitleContainer>
      <ArrowContainer href="#product">
        <Arrow />
      </ArrowContainer>
    </Container>
  );
}

export default Home;
