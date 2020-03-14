import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

type TeamMemberData = {
  name: string;
  nickname: string;
  description: string;
};

const MemberPicture = styled.img`
  --picture-size: 200px;
  height: var(--picture-size);
  width: var(--picture-size);
  margin: 10px;
`;

const TeamMember: React.FC<{ data: TeamMemberData }> = ({ data }) => (
  <>
    <MemberPicture
      key={data.nickname}
      src={`/assets/members/${data.nickname}.jpg`}
    />
  </>
);
TeamMember.propTypes = {
  data: PropTypes.exact({
    name: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default TeamMember;
