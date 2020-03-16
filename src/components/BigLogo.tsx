// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { useAmp } from 'next/amp';

const StyledLogo = styled.img`
  width: 215px;
  height: 250px;
  margin-bottom: 20px;
  @media screen and (max-width: 950px) {
    width: 125px;
    height: 150px;
  }
  @media screen and (max-width: 600px) {
    width: 85px;
    height: 100px;
  }
`;
const LogoContainer = StyledLogo.withComponent('div');

function BigLogo() {
  const amp = useAmp();

  if (!amp) {
    return <StyledLogo alt="Logo" src="/assets/logo_big.png" />;
  }

  return (
    <LogoContainer>
      <amp-img
        layout="responsive"
        height="8"
        width="7"
        alt="Logo"
        src="/assets/logo_big.png"
      />
    </LogoContainer>
  );
}

export default BigLogo;
