import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import styles from './404.module.css';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <div className={styles.container}>
      <h1 className={styles.title}>404 Page Not Found</h1>
      <br />
      <p className={styles.content}>
        The page you are looking for can&apos;t be found. Perhaps you were trying to find my
        {' '}
        <Link to="/">blog</Link>
?
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;
