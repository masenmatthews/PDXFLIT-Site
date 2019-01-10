import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Survey = () => (
  <Layout>
    <SEO title="Survey" />
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSeiuX58MxZOACGvEp1rDWVBok95Bn3B-8BlSpXvg_twrRV0fQ/viewform?embedded=true"
      width="640"
      height="774"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      title="New Member Survey"
    >
      Loading...
    </iframe>
  </Layout>
);

export default Survey;
