import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: var(--slide-height);
  width: 100vw;
  background-color: var(--primary-color);
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

const MemberPicture = styled.img`
  --picture-size: 200px;
  height: var(--picture-size);
  width: var(--picture-size);
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
            <MemberPicture src={`/assets/members/${member}.jpg`} />
          ))}
        </Grid>
      </Wrapper>
    </>
  );
}

export default About;
