// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useAmp } from 'next/amp';

const Container = styled.div`
  width: 230px;
  display: flex;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  --size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--size);
  height: var(--size);
  > img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Details = styled.div`
  margin-left: 20px;
  width: 100%;
  height: 100%;
`;
const Title = styled.h3`
  color: black;
  font-size: 1.5rem;
`;
const Description = styled.p`
  font-size: 0.8rem;
`;

const Feature: React.FC<{
  icon: string;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  const amp = useAmp();
  return (
    <Container>
      <IconContainer>
        {amp ? (
          <amp-img width="30" height="30" alt={title} src={icon} />
        ) : (
          <img alt={title} src={icon} />
        )}
      </IconContainer>
      <Details>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Details>
    </Container>
  );
};

Feature.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Feature;
