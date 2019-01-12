import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import MeetupEvent from './meetupEvent';

const MeetupEvents = () => (
  <StaticQuery
    query={graphql`
      query MeetupEventQuery {
        allMeetupEvent(
          sort: { fields: [time], order: DESC }
          filter: {
            group: {
              urlname: { eq: "pdxFLIT-Portland-Future-Leaders-In-Tech" }
            }
          }
        ) {
          edges {
            node {
              group {
                id
                name
              }
              status
              link
              name
              time
              duration
              description
              venue {
                name
              }
            }
          }
        }
      }
    `}
    render={data => {
      const events = data.allMeetupEvent.edges;

      const upcomingEvents = events.filter(
        ({ node: { status } = {} }) => status === 'upcoming',
      );

      const pastEvents = events.filter(
        ({ node: { status } = {} }) => status === 'past',
      );

      return (
        <section>
          {upcomingEvents.length > 0 ? <h1>Upcoming Events:</h1> : ''}
          {upcomingEvents.map(({ node, node: { name } = {} }) => {
            return <MeetupEvent key={name} {...node} />;
          })}

          {pastEvents.length > 0 ? <h1>Past Events:</h1> : ''}
          {pastEvents.map(({ node, node: { name } = {} }) => {
            return <MeetupEvent key={name} {...node} />;
          })}
        </section>
      );
    }}
  />
);

export default MeetupEvents;
