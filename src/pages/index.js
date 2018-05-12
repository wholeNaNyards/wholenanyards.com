import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BlogCard from '../components/BlogCard';

const StyledPageHeading = styled(Link)`
  font-size: 2.5em;
  font-family: 'Raleway', sans-serif;
  line-height: 1em;
  color: #a197f0;
`;

const Cards = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 1em;
`;

const IndexPage = ({ data }) => {
  const { allMarkdownRemark: { edges } } = data;
  return (
    <div>
      <Helmet title="Blog" />
      <StyledPageHeading to="/">Blog</StyledPageHeading>
      <Cards>
        {edges.map(({ node }) => (
          <BlogCard
            key={node.frontmatter.title}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            description={node.frontmatter.description}
            imageDescription={node.frontmatter.imageDescription}
            path={node.frontmatter.path}
          />
        ))}
      </Cards>
    </div>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          frontmatter: PropTypes.shape({
            path: PropTypes.string,
            title: PropTypes.string,
          }),
        }),
      })),
    }),
  }),
};

IndexPage.defaultProps = {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            frontmatter: {
              path: '',
              title: '',
            },
          },
        },
      ],
    },
  },
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            description
            imageDescription
          }
        }
      }
    }
  }
`;
