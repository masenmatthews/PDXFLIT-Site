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
    <p>This is a place for people who aspire to work in PDXtech!</p>
    <p>
      We're creating an online community that can meet offline and work on
      developing their skills!
    </p>
    <div className={styles.mainImage}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
