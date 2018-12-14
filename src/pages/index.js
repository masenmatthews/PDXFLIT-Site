import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/images/pdxFlitLogo';
import SEO from '../components/seo';
import styles from './index.module.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className={styles.mainImage}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
