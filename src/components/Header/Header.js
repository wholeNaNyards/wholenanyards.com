import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitch,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

import styles from './Header.module.css'

const Header = ({ data }) => (
  <nav className={styles.navBar}>
    <Link to="/">
      <div className={styles.logo}>WNY</div>
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
)

export default props => (
  <StaticQuery
    query={graphql`
      {
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
)
