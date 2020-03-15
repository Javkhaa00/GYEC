// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { useAmp } from 'next/amp';

const StyledLogo = styled.img`
  width: 43px;
  height: 50px;
  @media screen and (max-width: 950px) {
    width: 35px;
    height: 40px;
  }
`;
const LogoContainer = StyledLogo.withComponent('div');

function Logo() {
  const amp = useAmp();

  if (!amp) {
    return <StyledLogo alt="Logo" src="/assets/logo.png" />;
  }

  return (
    <LogoContainer>
      <amp-img
        layout="responsive"
        height="8"
        width="7"
        alt="Logo"
        src="/assets/logo.png"
      />
    </LogoContainer>
  );
}

export default Logo;
