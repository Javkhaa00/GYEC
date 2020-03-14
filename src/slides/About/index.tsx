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

const teamMembers = [
  'ezka',
  'oleg',
  'javkhaa',
  'enhjin',
  'erdmee',
  'shijka',
  'gulnvr',
  'kongro',
];
function About() {
  return (
    <>
      <Wrapper>
        <Grid>
          {teamMembers.map(member => (
            <Pictures src={`/assets/members/${member}.jpg`} />
          ))}
        </Grid>
      </Wrapper>
    </>
  );
}

export default About;
