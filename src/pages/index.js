import React from 'react';

import Layout from '../components/layout';
import Image from '../components/images/pdxFlitLogo';
import SEO from '../components/seo';
import styles from './index.module.css';
import WelcomeBody from '../components/welcome-body'
import Header from '../components/header'

const IndexPage = () => (
  <div>
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />  
    <div className={styles.mainImage}>
    </div>
  </Layout>
  <Header />
  <WelcomeBody/>
  </div>
);

export default IndexPage;
