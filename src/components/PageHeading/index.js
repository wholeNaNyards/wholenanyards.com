import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Container = styled.div`
  margin: 1.25em 0;

  @media (min-width: 600px) {
    font-size: 1.41em;
    margin: 1em 0;
  }

  @media (min-width: 900px) {
    font-size: 1.33em;
  }

  @media (min-width: 1200px) {
    font-size: 1.26em;
  }
`;

const StyledPageHeading = styled(Link)`
  color: #796be9;
  font-size: 1.25em;
  font-weight: 200;

  :hover {
    opacity: 0.6;
  }
`;

const PageHeading = ({ children, to }) => (
  <Container>
    <StyledPageHeading to={to}>{children}</StyledPageHeading>
  </Container>
);

export default PageHeading;
