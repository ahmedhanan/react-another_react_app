import React, { useState } from 'react';
import './NewEventForm.css';
function NewEventForm({ addNewEvent }) {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const handleNewEventFormSubmission = (e) => {
    e.preventDefault();
    const event = {
      title: eventName,
      date: eventDate,
      location: eventLocation,
      id: Math.random(),
    };
    addNewEvent(event);
  };
  return (
    <form className='new-event-form' onSubmit={handleNewEventFormSubmission}>
      <label>
        <span>Event Name</span>
        <input
          type='text'
          onChange={(e) => setEventName(e.target.value)}
          value={eventName}
        />
      </label>
      <label>
        <span>Event Date</span>
        <input
          type='date'
          onChange={(e) => setEventDate(e.target.value)}
          value={eventDate}
        />
      </label>
      <label>
        <span>Select City</span>
        <br />
        <select
          onChange={(e) => setEventLocation(e.target.value)}
          value={eventLocation}
        >
          <option value='no location selected'>---Select a location---</option>
          <option value='london'>London</option>
          <option value='manchester'>Manchester</option>
          <option value='cardiff'>Cardiff</option>
        </select>
      </label>
      <button>Add Event</button>
    </form>
  );
}

export default NewEventForm;
