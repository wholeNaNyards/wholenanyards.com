import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import IconLink from '../IconLink';

const NavBar = styled.nav`
  background-color: #6c5ce7;
  color: #f2f0fd;
  padding: 0.75em 1.25em;

  @media (min-width: 900px) {
    padding: 0.75em 6em;
  }
  @media (min-width: 1200px) {
    padding: 0.75em 12em;
  }
`;

const Brand = styled(Link)`
  color: #f2f0fd;
  line-height: 1em;
  font-size: 1.375em;
  font-family: 'Raleway', sans-serif;

  span {
    opacity: 0.6;
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
    <Brand to="/">
      whole<span>NaN</span>yards
    </Brand>
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
