import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';

import IconLink from '../IconLink';

const NavBar = styled.nav`
  background-color: #6c5ce7;
  color: #f2f0fd;
  padding: 0.5em 1.25em;

  @media (min-width: 900px) {
    padding: 0.5em 6em;
  }
  @media (min-width: 1200px) {
    padding: 0.5em 12em;
  }
`;

const LogoText = styled.h1`
  color: #f2f0fd;
  display: inline;
  font-size: 1.375em;
  font-weight: 200;
  line-height: 1em;
  margin-left: 0.75em;
  vertical-align: middle;

  span {
    color: #e7a95c;
  }

  :hover {
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
    line-height: 48px; // Same height of logo image, center vertically
  }
`;

const Header = ({ image }) => (
  <NavBar>
    <Link to="/">
      <Img resolutions={image} outerWrapperClassName="logoImageWrapper" />
      <LogoText>
        whole<span>NaN</span>yards
      </LogoText>
    </Link>
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
