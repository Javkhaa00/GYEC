import React from 'react';
import styled from 'styled-components';

const ArrowBox = styled.svg`
  width: 30px;
  height: 65px;
  margin-bottom: 10px;
  @media screen and (max-width: 550px) {
    width: 15px;
    height: 30px;
    margin-bottom: 5px;
  }
`;

function Arrow() {
  return (
    <ArrowBox
      viewBox="0 0 36 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 2V72M18 72L34 55.6449M18 72L2 55.6449"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </ArrowBox>
  );
}

export default Arrow;
