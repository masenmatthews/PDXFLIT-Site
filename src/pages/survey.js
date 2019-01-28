import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Survey = () => (
  <Layout>
    <SEO title="Survey"/>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScgvxzUuUnavJKkA9d35mvstUSy8WnRbHW59XqThnd8Cx_yHg/viewform?embedded=true"
        width="640"
        height="1771"
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
