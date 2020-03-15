import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

type TeamMemberData = {
  name: string;
  nickname: string;
  description: string;
};

const Container = styled.div`
  margin: 10px;
  width: 200px;
  height: 200px;
  @media (hover: hover) {
    position: relative;
  }
  @media (hover: none) {
    height: 250px;
  }
`;

const MemberPicture = styled.img`
  width: 200px;
  height: 200px;
`;
const MemberDescription = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (hover: hover) {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    opacity: 0;
    transition: 0.3s ease-in-out opacity;
    background-color: rgba(0, 0, 0, 0.6);

    :hover {
      opacity: 1;
      display: flex;
    }
  }

  @media (hover: none) {
    flex-direction: column-reverse;
  }
`;

const Name = styled.span`
  margin-top: 10px;
  font-size: 1.3rem;
`;

const TeamMember: React.FC<{ data: TeamMemberData }> = ({ data }) => (
  <Container>
    <MemberPicture
      key={data.nickname}
      alt={data.nickname}
      src={`/assets/members/${data.nickname}.jpg`}
    />
    <MemberDescription>
      <p>{data.description}</p>
      <Name>{data.name}</Name>
    </MemberDescription>
  </Container>
);
TeamMember.propTypes = {
  data: PropTypes.exact({
    name: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default TeamMember;
