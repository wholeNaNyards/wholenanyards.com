import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Container = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid #dfdfdf;
  margin-bottom: 2.5em;
  margin-top: 2.5em;
  padding: 1em;

  @media (min-width: 600px) {
    padding: 2em 2em;
  }
  @media (min-width: 900px) {
    padding: 2em 7em;
  }
  @media (min-width: 1200px) {
    padding: 2em 9em;
  }
`;

const Title = styled.div`
  color: #796be9;
  letter-spacing: -0.031em;
  line-height: 1.3;
  font-size: 1.5em;
  font-weight: 200;
  margin: 0;
  text-align: center;

  @media (min-width: 600px) {
    font-size: 1.885em;
  }
  @media (min-width: 900px) {
    font-size: 1.78em;
  }
  @media (min-width: 1200px) {
    font-size: 1.685em;
  }
`;

const Content = styled.div`
  color: #555;
  line-height: 1.7;
  text-align: center;

  @media (min-width: 600px) {
    font-size: 0.945em;
  }

  @media (min-width: 900px) {
    font-size: 0.89em;
  }

  @media (min-width: 1200px) {
    font-size: 0.85em;
  }

  a {
    color: #796be9;
  }
`;

const NotFoundPage = () => (
  <div>
    <Helmet title="Blog" />
    <Container>
      <Title>404 Page Not Found</Title>
      <br />
      <Content>
        The page you are looking for can&apos;t be found. Perhaps you were trying to find my{' '}
        <Link to="/">blog</Link>?
      </Content>
    </Container>
  </div>
);

export default NotFoundPage;
