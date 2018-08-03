import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import 'prismjs/themes/prism-okaidia.css';

import Header from '../components/Header';

// Base Color: #4e939a
// Lighter: #7cc2c5
// Darker: #48888f
// Gray: #eeebff

const globalStyles = `
  html { font-size: 1em; }

  body {
    background-color: #f2f0fd;
    color: #212529;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    line-height: 1.3em;
    margin: 0;
  }

  a {
    text-decoration: none;
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

  .logoImageWrapper {
    display: inline-block;
    font-size: 0;
    line-height: 0;
    vertical-align: middle;    
  }
`;

const MainContainer = styled.div`
  margin: 0 1.25em;

  @media (min-width: 600px) {
    margin: 0 2em;
  }
  @media (min-width: 900px) {
    margin: 0 7em;
  }
  @media (min-width: 1200px) {
    margin: 0 13em;
  }
`;

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet titleTemplate="%s | wholeNaNyards" defaultTitle="wholeNaNyards">
      <html lang="en" className="fontawesome-i2svg-pending" />
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:200,400" />
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.12/js/all.js"
        integrity="sha384-Voup2lBiiyZYkRto2XWqbzxHXwzcm4A5RfdfG6466bu5LqjwwrjXCMBQBLMWh7qR"
        crossOrigin="anonymous"
      />
      <style type="text/css">{globalStyles}</style>
    </Helmet>
    <Header image={data.headerImage.resolutions} />
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

export const pageQuery = graphql`
  query HeaderImageQuery {
    headerImage: imageSharp(id: { regex: "/icon/" }) {
      resolutions(width: 48, height: 48) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;
