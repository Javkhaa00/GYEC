import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Slide from '@/components/Slide';

const Container = styled(Slide)`
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  font-size: 1.7rem;
  > span {
    margin-right: 15px;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.9rem;
    > span {
      margin-right: 5px;
    }
  }
`;

const Contact: React.FC<{
  name?: string;
  children: React.ReactNode;
}> = ({ name, children }) => (
  <ContactContainer>
    {name && <span>{`${name}:`}</span>}
    {children}
  </ContactContainer>
);
Contact.propTypes = {
  // eslint-disable-next-line react/require-default-props
  name: PropTypes.string,
  children: PropTypes.node.isRequired,
};

function ContactUs() {
  return (
    <Container id="contact">
      <Title>Contact us</Title>
      <Contact name="Phone number">
        <a href="tel:+97699135563">+976 99135563</a>
      </Contact>
      <Contact name="Email">
        <a href="mailto:ezenbaatar.batjargal@gmail.com">
          ezenbaatar.batjargal@gmail.com
        </a>
      </Contact>
      <Contact>UNESCO street, Ulaanbaatar, Mongolia 13000</Contact>
    </Container>
  );
}

export default ContactUs;
