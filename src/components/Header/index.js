import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import IconLink from '../IconLink';

const NavBar = styled.nav`
  background-color: #333;
  color: white;

  @media (max-width: 599px) {
    padding: 0.75rem 1.5rem;
  }

  @media (min-width: 600px) {
    padding: 0.75rem 3rem;
  }

  @media (min-width: 900px) {
    padding: 0.75rem 6rem;
  }

  @media (min-width: 1200px) {
    padding: 0.75rem 12rem;
  }
`;

const Brand = styled(Link)`
  color: white;
  float: left;
  line-height: 1.2rem;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 100;
  letter-spacing: -1px;
`;

const IconContainer = styled.ul`
  float: right;
  text-align: right;
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    display: inline-block;
  }

  li a {
    color: white;
  }
`;

const Header = () => (
  <NavBar>
    <Brand to="/">wholeNaNyards</Brand>
    <IconContainer>
      <li>
        <IconLink iconClass="fab fa-twitch" to="https://www.twitch.tv/wholeNaNyards" />
      </li>
      <li>
        <IconLink iconClass="fab fa-twitter" to="https://twitter.com/wholeNaNyards" />
      </li>
      <li>
        <IconLink iconClass="fab fa-github" to="https://github.com/wholeNaNyards" />
      </li>
    </IconContainer>
  </NavBar>
);

export default Header;
