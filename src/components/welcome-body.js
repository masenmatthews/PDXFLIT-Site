import styles from './welcome-body.module.scss';
import React from 'react';
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';

const WelcomeBody = () => (
  <div>
    <div className={styles.row}>
      <div className={styles.event}><h1>Upcoming Event:</h1>
        <div className={styles.eventName}>
          <h2>pdxFLIT New Year Happy Hour @ Squarespace (6PM - 8PM)</h2>
          <p>We've been gone for a few months so that our members could spend the holidays with their families, but we're back! Join us for our New Year Happy Hour hosted at Squarespace! There will be a keynote by _____</p>
        </div>
      </div>
      <div className={styles.twitter}>
        <TwitterFollowButton screenName={'pdxflit'} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="pdxflit"
          options={{ height: 400 }}
        />
      </div>
    </div>
  </div>
);

export default WelcomeBody;
