import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import logo from '../../images/kylo.jpg';

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;
  h1 {
    img {
      height: 150px;
    }
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt="Kyle Ren" />
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;
