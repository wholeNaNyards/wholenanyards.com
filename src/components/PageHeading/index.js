import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const StyledPageHeading = styled(Link)`
  font-size: 2.5em;
  font-family: 'Raleway', sans-serif;
  line-height: 1em;
  color: #a197f0;
`;

const PageHeading = ({ children, to }) => <StyledPageHeading to={to}>{children}</StyledPageHeading>;

export default PageHeading;
