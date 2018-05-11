import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BlogCard from '../components/BlogCard';

const StyledPageHeading = styled(Link)`
  margin-bottom: 1em;
  font-size: 2.5em;
  font-family: 'Raleway', sans-serif;
  line-height: 1em;
  color: #796be9;
`;

const IndexPage = ({ data }) => {
  const { allMarkdownRemark: { edges } } = data;
  return (
    <div>
      <Helmet title="Blog" />
      <StyledPageHeading to="/">Blog</StyledPageHeading>
      {edges.map(({ node }) => (
        <div>
          <BlogCard
            key={1}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            description={node.frontmatter.description}
            imageDescription={node.frontmatter.imageDescription}
            path={node.frontmatter.path}
          />
        </div>
      ))}
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
