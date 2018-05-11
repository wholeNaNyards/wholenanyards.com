import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/Header';

// Base Color: #6c5ce7
// Lighter: #796be9
// Darker: #5f4de5
// Light Grey: #f2f0fd
// Dark Grey: #04020f

const globalStyles = `
  html { font-size: 1em; }

  body {
    background-color: #f2f0fd;
    color: #212529;
    font-family: 'Lora', serif;
    line-height: 1.3em;
    margin: 0;
  }

  a {
      color: inherit;
      text-decoration: none;
  }

  a:hover {
    opacity: 0.6;
  }

  @media (min-width: 600px) {
    html { font-size: 1.0625em; }
  }
  @media (min-width: 900px) {
    html { font-size: 1.125em; }
  }
  @media (min-width: 1200px) {
    html { font-size: 1.1875em; }
  }
  @media (min-width: 1800px) {
    html { font-size: 1.25em; }
  }
`;

const MainContainer = styled.div`
  margin: 1em 1.25em;

  @media (min-width: 600px) {
    margin: 2em 2em;
  }
  @media (min-width: 900px) {
    margin: 2em 7em;
  }
  @media (min-width: 1200px) {
    margin: 2em 13em;
  }
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet titleTemplate="%s | wholeNaNyards" defaultTitle="wholeNaNyards">
      <html lang="en" className="fontawesome-i2svg-pending" />
      <meta charSet="utf-8" />
      <link href="https://fonts.googleapis.com/css?family=Lora|Raleway:200" rel="stylesheet" />
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.12/js/all.js"
        integrity="sha384-Voup2lBiiyZYkRto2XWqbzxHXwzcm4A5RfdfG6466bu5LqjwwrjXCMBQBLMWh7qR"
        crossOrigin="anonymous"
      />
      <style type="text/css">{globalStyles}</style>
    </Helmet>
    <Header />
    <MainContainer>{children()}</MainContainer>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

TemplateWrapper.defaultProps = {
  children: null,
};

export default TemplateWrapper;
