import React from 'react';
import Img from 'gatsby-image';
import { Link, StaticQuery, graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from './Header.module.css';

const Header = ({ data }) => (
  <nav className={styles.navBar}>
    <Link to="/">
      <Img fixed={data.headerImage.childImageSharp.fixed} className={styles.logoImageWrapper} />
    </Link>
    <ul className={styles.iconContainer}>
      <li className={styles.icon}>
        <OutboundLink href={data.site.siteMetadata.social.twitch}>
          <FontAwesomeIcon icon={faTwitch} />
        </OutboundLink>
      </li>
      <li className={styles.icon}>
        <OutboundLink href={data.site.siteMetadata.social.twitter}>
          <FontAwesomeIcon icon={faTwitter} />
        </OutboundLink>
      </li>
      <li className={styles.icon}>
        <OutboundLink href={data.site.siteMetadata.social.github}>
          <FontAwesomeIcon icon={faGithub} />
        </OutboundLink>
      </li>
    </ul>
  </nav>
);

export default props => (
  <StaticQuery
    query={graphql`
      {
        headerImage: file(relativePath: { eq: "icon.png" }) {
          childImageSharp {
            fixed(width: 48, height: 48) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        site {
          siteMetadata {
            title
            social {
              github
              twitch
              twitter
            }
          }
        }
      }
    `}
    render={data => <Header data={data} {...props} />}
  />
);
