import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './header.module.scss';

const Header = ({ siteTitle }) => (
  <div className={styles.background}>
    <div className={styles.container}>
      <h1 className={styles.header}>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <div className={styles.links}>
        <Link to="/about/">About</Link>
        <Link to="/contact/">Contact</Link>
        <Link to="/survey/">New Member Survey</Link>
      </div>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
