import React from 'react';
import styled from 'styled-components';

import Slide from '@/components/Slide';

import teamMembers from './members.json';
import TeamMember from './TeamMember';

const Container = styled(Slide)`
  color: white;
  background-color: var(--primary-color);
`;

const MemberList = styled.div`
  display: flex;
  max-width: 900px;
  flex-flow: row wrap;
  justify-content: center;
`;

const Title = styled.h1`
  margin: 10px 0;
  font-size: 2rem;
  font-weight: 900;
`;
const Description = styled.h3`
  width: 20rem;
  font-size: 1rem;
  text-align: center;
  font-weight: 700;
`;

function About() {
  return (
    <Container id="about">
      <Title>About us</Title>
      <Description>
        We are a group of high school students who are dedicated to creating
        innovative solutions to the problems the world faces today. Our goal is
        not just to make a slight change, but also to build the future we want.
      </Description>
      <MemberList>
        {teamMembers.map(member => (
          <TeamMember key={member.nickname} data={member} />
        ))}
      </MemberList>
    </Container>
  );
}

export default About;
