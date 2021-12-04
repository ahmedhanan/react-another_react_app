import React, { useState } from 'react';
import Title from './Title';
function EventsList({ events }) {
  const [eventsList, setEventsList] = useState(events);
  const handleEventDeleteClick = (id) => {
    setEventsList((prevEvents) => {
      return prevEvents.filter((event) => {
        return event.id !== id;
      });
    });
  };
  return (eventsList.map((event) => (
    <React.Fragment key={event.id}>
      <Title title={event.title} />
      <button
        onClick={() => {
          handleEventDeleteClick(event.id);
        }}
      >
        Delete Event
      </button>
    </React.Fragment>
  )));
}

export default EventsList;
