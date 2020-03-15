import React from 'react';
import styled from 'styled-components';

import Slide from '@/components/Slide';
import Button from '@/components/Button';

import Feature from './Feature';

const ProductNameContainer = styled.div`
  width: 100%;
  display: flex;
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

const ProductContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 40px;
`;
const FeaturesColumn = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ProductPicture = styled.img`
  margin: 0 15px 15px 0;
  display: block;
  max-width: 400px;
  background-image: url('/assets/shocklance.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 500px) {
    max-width: calc(100vw - 80px);
    margin-bottom: 10px;
  }
`;

function Product() {
  return (
    <Slide id="product">
      <ProductNameContainer>
        <Slogan>You never sleep when you have</Slogan>
        <Title>Shocklance</Title>
      </ProductNameContainer>
      <ProductContainer>
        <ProductPicture alt="Shocklance" src="/assets/shocklance.png" />
        <FeaturesColumn>
          <Feature
            icon="/assets/features/voltage.svg"
            title="20V"
            description="But I must explain to you how all this mistaken idea of denouncing pleasure and praising."
          />
          <Feature
            icon="/assets/features/clock.png"
            title="24 hour"
            description="To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it."
          />
          <Feature
            icon="/assets/features/smart-watch.png"
            title="Smart watch"
            description="When, while the lovely valley teems with vapour around me, and the meridian sun strikes the"
          />
          <Feature
            icon="/assets/features/touch.png"
            title="Touch"
            description="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring"
          />
        </FeaturesColumn>
      </ProductContainer>
      <Button>Learn more</Button>
    </Slide>
  );
}

export default Product;
