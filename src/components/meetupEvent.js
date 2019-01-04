import PropTypes from 'prop-types';
import React from 'react';
import { format } from 'date-fns';
import excerptHtml from 'excerpt-html';

const MeetupEvent = ({ name, time, duration, description, venue, link }) => {
  const eventDate = format(new Date(time), 'MMMM Do');
  const startTime = format(new Date(time), 'hA');
  const endTime = format(new Date(time + duration), 'hA');

  return (
    <article key={name}>
      <h2>
        <a href={link}>
          {`${name} @ ${venue.name} (${eventDate}, ${startTime} - ${endTime})`}
        </a>
      </h2>
      <p
        dangerouslySetInnerHTML={{
          __html: excerptHtml(description, {
            stripTags: false, // Set to false to get html code
            pruneLength: 200, // Amount of characters that the excerpt should contain
            pruneString: '…', // Character that will be added to the pruned string
            pruneSeparator: ' ', // Separator to be used to separate words
          }),
        }}
      />
    </article>
  );
};

MeetupEvent.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  venue: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
};

export default MeetupEvent;
