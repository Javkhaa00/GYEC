// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { useAmp } from 'next/amp';

const ProductImage = styled.img`
  margin: 0 15px 15px 0;
  display: block;
  max-width: 400px;

  @media screen and (max-width: 500px) {
    max-width: calc(100vw - 80px);
    margin-bottom: 10px;
  }
`;
const ProductImageContainer = styled.div`
  --size: 400px;
  width: var(--size);
  height: var(--size);
  margin: 0 15px 15px 0;
  @media screen and (max-width: 500px) {
    --size: calc(100vw - 80px);
    margin-bottom: 10px;
  }
`;

function ProductPicture() {
  const amp = useAmp();

  if (!amp) {
    return <ProductImage alt="Shocklance" src="/assets/shocklance.png" />;
  }

  return (
    <ProductImageContainer>
      <amp-img
        layout="responsive"
        width="1"
        height="1"
        alt="Shocklance"
        src="/assets/shocklance.png"
      />
    </ProductImageContainer>
  );
}

export default ProductPicture;
