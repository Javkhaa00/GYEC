import React from 'react';
import styled from "styled-components";

const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: #19ACBE;
  // align-items: center;
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
const Pictures = styled.div`
  height: 100px;
  width: 60px;
`;

function About() {
  return (
    <>
      <Wrapper>
        <Pictures>
          {assets.map(member => (
            <img src={member} />
          ))}
        </Pictures>
      </Wrapper>
    </>
  );
}

export default About;