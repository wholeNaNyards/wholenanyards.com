import React from 'react';
import Img from 'gatsby-image';
import RehypeReact from 'rehype-react';
import { graphql } from 'gatsby';
import 'prismjs/themes/prism-okaidia.css'; // Custom CSS for code blocks
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import VideoGIF from '../components/VideoGIF/VideoGIF';
import styles from './post.module.css';

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  const renderAst = new RehypeReact({
    createElement: React.createElement,
    components: { 'video-gif': VideoGIF },
  }).Compiler;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        image={post.frontmatter.image.childImageSharp.fluid.src}
        pathname={post.fields.slug}
        article
      />
      <div className={styles.container}>
        <div className={styles.blogContainer}>
          <h1 className={styles.title}>{post.frontmatter.title}</h1>
          <h6 className={styles.date}>{post.frontmatter.date}</h6>
          <Img
            fluid={post.frontmatter.image.childImageSharp.fluid}
            alt={post.frontmatter.imageDescription}
          />
          <div className={styles.content}>{renderAst(post.htmlAst)}</div>
        </div>
        <hr className={styles.authorDivider} />
        <div className={styles.author}>
          <Img
            fluid={data.authorImage.childImageSharp.fluid}
            className={styles.authorImage}
            imgStyle={{ borderRadius: '50%', border: '1px solid #2a2a2a' }}
          />
          <div className={styles.authorContent}>
            <h3>wholeNaNyards</h3>
            <p>
              Nick is a gamer, software engineer, and occasional tech writer. wholeNaNyards.com is a
              collection of his thoughts, tutorials, and random banter. You can check out his
              {' '}
              <a href={data.site.siteMetadata.social.twitter}>Twitter</a>
              {' '}
for more.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;

export const postQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        social {
          twitter
        }
      }
    }
    authorImage: file(relativePath: { eq: "nick.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      fields {
        slug
      }
      excerpt(pruneLength: 140)
      frontmatter {
        title
        date: date(formatString: "MMMM DD YYYY")
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
`;
