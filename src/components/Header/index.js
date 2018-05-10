import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import IconLink from '../IconLink';

const NavBar = styled.nav`
  background-color: #6c5ce7;
  color: #f2f0fd;

  @media (max-width: 599px) {
    padding: 0.75rem 1rem;
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
  color: #f2f0fd;
  float: left;
  line-height: 1.2rem;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 100;
  font-family: 'Raleway', sans-serif;

  :hover {
    color: #c9c4f6;
  }
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
