import React from 'react';
import styled from 'styled-components';

import Slide from '@/components/Slide';

const ProductNameContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  text-align: center;
  flex-direction: column;
`;
const Slogan = styled.h3`
  color: #0000007f;
  font-weight: 800;
  font-size: 1rem;
`;
const Title = styled.h1`
  color: var(--primary-color);
  font-size: 2.7rem;
  font-weight: 900;
`;

function Product() {
  return (
    <Slide>
      <ProductNameContainer>
        <Slogan>You never sleep when you have</Slogan>
        <Title>Shocklance</Title>
      </ProductNameContainer>
    </Slide>
  );
}

export default Product;
