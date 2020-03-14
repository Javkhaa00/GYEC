import React from 'react';
import styled from 'styled-components';

import { groupToPairs } from '@/util';

import Slide from '@/components/Slide';

import teamMembers from './members.json';
import TeamMember from './TeamMember';

const Container = styled(Slide)`
  color: white;
  background-color: var(--primary-color);
`;

const MemberList = styled.div`
  display: flex;
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

const Col = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

function About() {
  return (
    <Container id="about">
      <Title>About us</Title>
      <Description>
        We are a bunch mixed high school students from different schools who are
        trying to decrease human injuries and increase work power of people.
      </Description>
      <MemberList>
        {groupToPairs(
          teamMembers.map(member => (
            <TeamMember key={member.nickname} data={member} />
          )),
        ).map((children, i) => (
          <Col key={i.toString()}>{children}</Col>
        ))}
      </MemberList>
    </Container>
  );
}

export default About;
