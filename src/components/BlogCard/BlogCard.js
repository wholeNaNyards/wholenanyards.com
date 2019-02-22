import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import styles from './BlogCard.module.css';

const BlogCard = ({
  title, date, description, imageUrl, imageDescription, slug,
}) => (
  <article className={styles.card}>
    <Link to={slug} className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.date}>{date}</h3>
      <div className={styles.imageContainer}>
        <Img fluid={imageUrl} alt={imageDescription} className={styles.imageWrapper} />
      </div>
      <p className={styles.content}>{description}</p>
      <div className={styles.actionContainer}>
        <h3 className={styles.action}>Read More</h3>
      </div>
    </Link>
  </article>
);

export default BlogCard;
