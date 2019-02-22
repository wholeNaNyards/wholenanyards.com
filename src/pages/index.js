import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import BlogCard from '../components/BlogCard/BlogCard';
import styles from './index.module.css';

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Blog" />
      <div className={styles.cards}>
        {posts.map(({ node }) => (
          <BlogCard
            key={node.fields.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            description={node.excerpt}
            imageUrl={node.frontmatter.image.childImageSharp.fluid}
            imageDescription={node.frontmatter.imageDescription}
            slug={node.fields.slug}
          />
        ))}
      </div>
    </Layout>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          limit: 10
          filter: { frontmatter: { published: { eq: true } } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              fields {
                slug
              }
              excerpt(pruneLength: 140)
              frontmatter {
                title
                date(formatString: "MMMM DD YYYY")
                image {
                  childImageSharp {
                    fluid(maxWidth: 650) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                imageDescription
              }
            }
          }
        }
      }
    `}
    render={data => <IndexPage data={data} {...props} />}
  />
);
