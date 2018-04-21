import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';

const StyledPageHeading = styled.h3`
  margin-bottom: 0.75rem;
`;

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    // <Row>
    // <Col md={{ size: 8, offset: 2 }} xl={{ size: 6, offset: 3 }}>
    <div>
      <Helmet title={`${post.frontmatter.title} | wholeNaNyards`} />
      <StyledPageHeading className="d-md-none">
        <Link to="/">Blog</Link>
      </StyledPageHeading>
      <h1>{post.frontmatter.title}</h1>
      <h4>{post.frontmatter.date}</h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        date: PropTypes.string,
        title: PropTypes.string,
      }),
      html: PropTypes.string,
    }),
  }),
};

BlogPost.defaultProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        date: '',
        title: '',
      },
      html: '',
    },
  },
};

export default BlogPost;

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
