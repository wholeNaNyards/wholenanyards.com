import React from 'react';
import styled from 'styled-components';

const StyledAnchor = styled.a`
  padding-left: 1em;
  color: #f2f0fd;
`;

const StyledIcon = styled.i`
  font-size: 1.375em;
  vertical-align: middle;
`;

const IconLink = ({ iconClass, to }) => (
  <StyledAnchor href={to}>
    <StyledIcon className={`${iconClass}`} />
  </StyledAnchor>
);

export default IconLink;
