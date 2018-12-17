import { Link } from 'gatsby';
import React from 'react';
import styles from './navbar.module.scss';
import logo from '../images/logo.png';

const Navbar = () => (
  <div className={styles.links}>
    <Link to="/">
        <img src={logo} className={styles.logo}/>
    </Link>   
    <button className={styles.buttonLinks}>
      <Link to="/about/" className={styles.about}>About</Link>
    </button>
    <button className={styles.buttonLinks}>
      <Link to="/survey/" className={styles.new}>New Members</Link>
    </button>
    <button className={styles.buttonLinks}>
      <Link to="/contact/" className={styles.contact}>Contact</Link>
    </button>
  </div>
);
export default Navbar;
