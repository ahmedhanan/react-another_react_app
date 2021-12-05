import React, { useState } from 'react';
import './App.css';
import EventsList from './components/EventsList';
import Modal from './components/Modal';
import NewEventForm from './components/NewEventForm';
import Title from './components/Title';
function App() {
  const [showEvents, setShowEvents] = useState(true);
  const [eventsList, setEventsList] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: 'race on moo moo farm', id: 3 },
  ]);
  const [showModal, setShowModal] = useState(false);
  const handleShowEventsClick = () => {
    setShowEvents(!showEvents);
  };
  const addToEventsList = (event) => {
    setEventsList((prevList) => {
      return [...prevList, event];
    });
    setShowModal(false);
  };
  return (
    <div className='App'>
      <Title
        title='Mario Kingdom Events'
        subtitle='All the events of Mario Kingdom.'
      />
      {showEvents && (
        <button onClick={handleShowEventsClick}>Hide Events</button>
      )}
      {!showEvents && (
        <button onClick={handleShowEventsClick}>Show Events</button>
      )}
      {showEvents && <EventsList events={eventsList} />}
      <br />
      <button onClick={() => setShowModal(true)}>Add a new event</button>
      {showModal && (
        <Modal closeModal={setShowModal}>
          <NewEventForm addNewEvent={addToEventsList} />
        </Modal>
      )}
    </div>
  );
}

export default App;
