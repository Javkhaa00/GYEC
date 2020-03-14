import React from 'react';
import Slide from '@/components/Slide';
import styled from 'styled-components';

const Container = styled(Slide)`
  background-color: var(--primary-color);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'grid grid grid grid' 'grid grid grid grid';
`;

const MemberList = styled.div`
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
    <Container>
      <MemberList>
        {teamMembers.map(member => (
          <MemberPicture src={`/assets/members/${member}.jpg`} />
        ))}
      </MemberList>
    </Container>
  );
}

export default About;
