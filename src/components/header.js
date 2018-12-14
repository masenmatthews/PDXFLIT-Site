import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './header.module.css';

const Header = ({ siteTitle }) => (
  <div className={styles.background}>
    <div className={styles.container}>
      <h1 className={styles.header}>
        <Link className={styles.link} to="/">
          {siteTitle}
        </Link>
      </h1>
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
