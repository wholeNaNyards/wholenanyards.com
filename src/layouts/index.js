import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/Header';
import './index.scss';

const Container = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const bodyStyle = `
  background-color : #fafafa
  color: #212529;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  margin: 0;
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      htmlAttributes={{ style: 'font-size: 20px;' }}
      bodyAttributes={{ style: bodyStyle }}
    />
    <Header />
    <Container>{children()}</Container>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

TemplateWrapper.defaultProps = {
  children: null,
};

export default TemplateWrapper;
