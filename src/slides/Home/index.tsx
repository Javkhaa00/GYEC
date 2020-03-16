import React from 'react';
import styled from 'styled-components';

import NavBar from '@/components/NavBar';
import BigLogo from '@/components/BigLogo';

const Container = styled.section`
  width: 100%;
  color: white;
  height: var(--slide-height);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url('/assets/watch.png');

  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  width: 100%;
  margin: auto 0;
  display: flex;
  padding: 0 15px;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;
const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  font-family: Raleway;
  margin-bottom: 20px;
  text-transform: uppercase;
  @media screen and (max-width: 550px) {
    font-size: 2rem;
    margin-bottom: 5px;
  }
`;
const TextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  > h3 {
    font-size: 1.5rem;
    text-transform: uppercase;
  }
  > hr {
    width: 100px;
    margin: 0 15px;
    height: 0px;
    border: 1px solid white;
  }
  @media screen and (max-width: 550px) {
    > h3 {
      font-size: 1rem;
    }
    > hr {
      width: 50px;
    }
  }
`;

function Home() {
  return (
    <Container id="home">
      <NavBar />
      <TitleContainer>
        <BigLogo />
        <Title>Nani Tech</Title>
        <TextContainer>
          <hr />
          <h3>Tech Startup</h3>
          <hr />
        </TextContainer>
      </TitleContainer>
    </Container>
  );
}

export default Home;
