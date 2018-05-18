import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PageHeading from '../components/PageHeading';

const PostContainer = styled.div`
  margin-top: 1em;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid #dfdfdf;

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

const Title = styled.h1`
  color: #2a2a2a;
  line-height: 120%;
  letter-spacing: -0.031em;
  margin: 0.25em 0 0.5em 0;
  font-size: 1.7em;
  font-weight: 200;
`;

const Date = styled.h4`
  color: #a9a9a9;
  font-size: 0.9em;
  font-weight: 200;
  margin: 0;
  letter-spacing: 1.5px;

  @media (min-width: 600px) {
    font-size: 0.8em;
  }

  @media (min-width: 1200px) {
    font-size: 0.7em;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 1em;
`;

const Content = styled.div`
  font-size: 1.0625em;
  font-family: 'Spectral', serif;
  color: #555;

  @media (min-width: 900px) {
    font-size: 1.02em;
  }

  @media (min-width: 1200px) {
    font-size: 0.95em;
  }
`;

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <div>
      <Helmet title={post.frontmatter.title} />
      <PageHeading to="/">Blog</PageHeading>
      <PostContainer>
        <Date>By wholeNaNyards / {post.frontmatter.date}</Date>
        <Title>{post.frontmatter.title}</Title>
        <Image
          src="http://www.abbeyjfitzgerald.com/wp-content/uploads/2017/02/image-example-01.jpg"
          // alt={imageDescription}
        />
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
      </PostContainer>
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
