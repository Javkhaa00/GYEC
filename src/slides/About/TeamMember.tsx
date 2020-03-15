// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useAmp } from 'next/amp';

type TeamMemberData = {
  name: string;
  nickname: string;
  description: string;
};

const Container = styled.div`
  width: 200px;
  height: 250px;
  margin: 30px;
  > img,
  amp-img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
`;

const MemberDescription = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  > p {
    margin-top: 10px;
    color: var(--primary-color);
  }
`;

const Name = styled.span`
  margin-top: 10px;
  font-size: 1.3rem;
`;

const TeamMember: React.FC<{ data: TeamMemberData }> = ({ data }) => {
  const amp = useAmp();
  return (
    <Container>
      {amp ? (
        <amp-img
          width="200"
          height="200"
          alt={data.nickname}
          src={`/assets/members/${data.nickname}.jpg`}
        />
      ) : (
        <img
          key={data.nickname}
          alt={data.nickname}
          src={`/assets/members/${data.nickname}.jpg`}
        />
      )}
      <MemberDescription>
        <Name>{data.name}</Name>
        <p>{data.description}</p>
      </MemberDescription>
    </Container>
  );
};
TeamMember.propTypes = {
  data: PropTypes.exact({
    name: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default TeamMember;
