import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import background from '../images/background.jpg';
import Header from '../components/Header';

// Base Color: #6c5ce7
// Lighter: #796be9
// Darker: #5f4de5
// Light Grey: #f2f0fd
// Dark Grey: #04020f

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      htmlAttributes={{
        class: 'fontawesome-i2svg-pending',
        style: 'font-size: 20px',
      }}
      bodyAttributes={{
        style: `
          background-color: #f2f0fd;
          color: #212529;
          font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.3rem;
          margin: 0;
        `,
      }}
    >
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Raleway:100" rel="stylesheet" />
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.12/js/all.js"
        integrity="sha384-Voup2lBiiyZYkRto2XWqbzxHXwzcm4A5RfdfG6466bu5LqjwwrjXCMBQBLMWh7qR"
        crossOrigin="anonymous"
      />
    </Helmet>

    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <Header />
      <div className="android-content mdl-layout__content">
        <div className="page-content">
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--12 mdl-cell--8-col-tablet mdl-cell--2-offset-tablet mdl-cell--4-col-desktop mdl-cell--4-offset-desktop">
              {children()}
            </div>
          </div>
        </div>
      </div>
    </div>
    <script defer src="https://code.getmdl.io/1.3.0/material.min.js" />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

TemplateWrapper.defaultProps = {
  children: null,
};

export default TemplateWrapper;
