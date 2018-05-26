import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Redirect } from 'react-router';

import PageHeading from '../components/PageHeading';

const PostContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid #dfdfdf;
  margin-bottom: 2.5em;
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

  img {
    display: block;
    height: auto;
    margin-bottom: 1em;
    width: 100%;
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

const Date = styled.div`
  color: #a9a9a9;
  letter-spacing: 1.5px;
  font-size: 0.82em;
  font-weight: 200;
  margin: 0.75em 0 1em 0;
  text-align: center;

  @media (min-width: 600px) {
    font-size: 0.765em;
  }

  @media (min-width: 900px) {
    font-size: 0.723em;
  }

  @media (min-width: 1200px) {
    font-size: 0.685em;
  }
`;

const Content = styled.div`
  color: #555;
  line-height: 1.7;

  @media (min-width: 600px) {
    font-size: 0.945em;
  }

  @media (min-width: 900px) {
    font-size: 0.89em;
  }

  @media (min-width: 1200px) {
    font-size: 0.85em;
  }

  h1,
  h2,
  table,
  code {
    margin: 0 0 1.25rem 0;
  }

  hr {
    border: 1px solid #d4d4d4;
  }

  h1,
  h2 {
    color: #2a2a2a;
    letter-spacing: -0.031em;
    line-height: 1.3;
    font-weight: 200;
  }

  h1 {
    font-size: 1.5em;

    @media (min-width: 600px) {
      font-size: 1.99em;
    }
    @media (min-width: 900px) {
      font-size: 2em;
    }
    @media (min-width: 1200px) {
      font-size: 1.98em;
    }
  }

  h2 {
    font-size: 1.25em;

    @media (min-width: 600px) {
      font-size: 1.5em;
    }
    @media (min-width: 900px) {
      font-size: 1.5em;
    }
    @media (min-width: 1200px) {
      font-size: 1.49em;
    }
  }

  strong {
    color: #2a2a2a;
  }

  blockquote {
    border-left: 8px solid #eaeaea;
    font-style: italic;
    margin: 1.6rem 1.6rem 1.6rem 0;
    padding: 0 0 0 0.8rem;
  }

  table {
    border-collapse: collapse;
    display: block;
    overflow: auto;
    width: 100%;
  }

  table tr:nth-child(2n) {
    background-color: #f6f6f6;
  }

  td,
  th {
    border: 1px solid #dfe2e5;
    padding: 6px 13px;
  }

  iframe {
    border: none;
  }

  code {
    border: none !important;
    font-size: 0.81em;
  }

  .gatsby-highlight {
    background-color: #2a2a2a;
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }

  .gatsby-highlight pre[class*='language-'] {
    background-color: transparent;
    border: none;
    box-shadow: none;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left;
    min-width: 100%;
  }
`;

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  return !post.frontmatter.published ? (
    <Redirect to="/404" />
  ) : (
    <div>
      <Helmet title={post.frontmatter.title} />
      <PageHeading to="/">Blog</PageHeading>
      <PostContainer>
        <Title>{post.frontmatter.title}</Title>
        <Date>{post.frontmatter.date}</Date>
        <img src={post.frontmatter.image} alt={post.frontmatter.imageDescription} />
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
        date: date(formatString: "MMMM DD YYYY")
        image
        imageDescription
        published
      }
    }
  }
`;
