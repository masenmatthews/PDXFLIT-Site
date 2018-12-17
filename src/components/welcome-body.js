import styles from './welcome-body.module.scss';
import React from 'react';
import {
  TwitterTimelineEmbed,
  TwitterFollowButton,
} from 'react-twitter-embed';

const WelcomeBody = () => (
  <div className={styles.twitter}>
    <TwitterFollowButton
    screenName={'pdxflit'}
  />
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="pdxflit"
      options={{ height: 400 }}
    />
  </div>
);

export default WelcomeBody;
