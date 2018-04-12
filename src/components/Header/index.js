import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import logo from '../../images/kylo.jpg';

const HeaderWrapper = styled.div`
  margin-bottom: 2rem;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0.5rem 1.0875rem;
`;

const StyledLink = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -1px;
  color: unset;
  :hover {
    color: unset;
    text-decoration: none;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <h4 style={{ margin: 0 }}>
        <StyledLink to="/">wholeNaNyards</StyledLink>
      </h4>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;
