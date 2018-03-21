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
      <ul>
        {edges.map(({ node }) => (
          <li>
            <Link key={node.id} to={node.frontmatter.path}>
              {node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

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
          }
        }
      }
    }
  }
`;

export default IndexPage;
