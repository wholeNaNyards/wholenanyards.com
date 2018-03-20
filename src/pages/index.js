import React from 'react';
import Link from 'gatsby-link';

const IndexPage = ({ data }) => {
  const { allMarkdownRemark: { edges } } = data;
  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      <h2>Index</h2>
      {edges.map(({ node: { frontmatter: post } }) => (
        <div>
          <Link to={post.path}>{post.title}</Link>
          <br />
        </div>
      ))}
    </div>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

export default IndexPage;
