import styles from './welcome-body.module.scss';
import React from 'react';
import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';
import MeetupEvents from './meetupEvents';

const WelcomeBody = () => (
  <div>
    <div className={styles.row}>
      <div className={styles.event}>
        <h1>Upcoming Event:</h1>
        <MeetupEvents />
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
