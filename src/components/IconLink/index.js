import React from 'react';
import styled from 'styled-components';

const StyledAnchor = styled.a`
  padding: 1rem 0.4rem;
`;

const StyledIcon = styled.i`
  font-size: 1.2rem;
  vertical-align: middle;
`;

const IconLink = ({ iconClass, to }) => (
  <StyledAnchor href={to}>
    <StyledIcon className={`${iconClass}`} />
  </StyledAnchor>
);

export default IconLink;
