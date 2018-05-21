import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const StyledPageHeading = styled(Link)`
  font-size: 2.5em;
  line-height: 1em;
  color: #796be9;

  :hover {
    opacity: 0.6;
  }
`;

const PageHeading = ({ children, to }) => <StyledPageHeading to={to}>{children}</StyledPageHeading>;

export default PageHeading;
