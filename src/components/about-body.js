import React from 'react';
import styles from './about-body.module.scss';

const AboutBody = () => (
  <div className={styles.container}>
    <h1 className={styles.head}>About</h1>
    <p>Portland Future Leaders In Tech (pdxFLIT) is a community organization based in Portland, Oregon. We facilitate monthly meetups and host a variety of events including presentations, hackathons, happy hours, and more.</p>
    <p>pdxFLIT was launched in April 2018 and we have continued to operate on a monthly basis since then. Going forward, we hope to continue hosting events like talks and hackathons while expanding our reach to include volunteer, leadership, and mentorship oppurtunities for group members. We want to create a space where tech newcomers feel comfortable, supported, and empowered. Furthermore, we want to foster growth and empathy in hopes that our future leaders in tech will continue to support the newcomers that arrive after them.</p>
    <p>There's a space for you at pdxFLIT regardless of whether you're a seasoned senior developer or a tech-curious newcomer who's never written a line of HTML. Regardless of where you fall, we encourage you to play your part in teaching, learning, and making the Portland tech community as inviting and inclusive as possible. If you're interested in learning more, please contact us or check out our page on <a href="https://www.meetup.com/pdxFLIT-Portland-Future-Leaders-In-Tech/" target="_">Meetup!</a></p>

    <h1 className={styles.head}>Code of Conduct</h1>
    <p>pdxFLIT utilizes a Code of Conduct to keep events and group interactions respectful, inclusive, and safe for everyone who wants to be part of the community. We encourage all event atteendees and group affiliates to read the Code of Conduct. If you see someone violating these rules or experience anything that makes you feel unsafe or uncomfortable at any of our events, please notify us using the criteria on the Code of Conduct.</p>
      <button className={styles.conduct}>
        <a href="https://docs.google.com/document/d/1NlIX6c0UQi6kUq1joXM-9-1SiNxWsw_5Gmsdhx5csow/edit?usp=sharing" target="_">See Code of Conduct</a>
      </button>
  </div>
);

export default AboutBody;
