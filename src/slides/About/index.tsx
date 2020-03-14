import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: #19acbe;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'grid grid grid grid' 'grid grid grid grid';
`;
const assets = [
  '/assets/members/ezka.jpg',
  '/assets/members/oleg.jpg',
  '/assets/members/javkhaa.jpg',
  '/assets/members/enhjin.jpg',
  '/assets/members/erdmee.jpg',
  '/assets/members/shijka.jpg',
  '/assets/members/gulnvr.jpg',
  '/assets/members/kongro.jpg',
];
const Grid = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 2fr 2fr;
  grid-area: grid;
`;
const Pictures = styled.img`
  height: 45%;
  width: 80%;
`;

function About() {
  return (
    <>
      <Wrapper>
        <Grid>
          {assets.map(member => (
            <Pictures src={member} />
          ))}
        </Grid>
      </Wrapper>
    </>
  );
}

export default About;
