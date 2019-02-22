import React from 'react';
import Header from '../Header/Header';
import styles from './Layout.module.css';

const Layout = ({ children }) => (
  <div>
    <Header />
    <div className={styles.mainContainer}>{children}</div>
  </div>
);

export default Layout;
