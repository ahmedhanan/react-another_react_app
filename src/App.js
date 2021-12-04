import React, { useState } from 'react';
import './App.css';
import EventsList from './components/EventsList';
import Modal from './components/Modal';
import Title from './components/Title';
function App() {
  const [showEvents, setShowEvents] = useState(true);
  const eventsList = [
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: 'race on moo moo farm', id: 3 },
  ];
  const [showModal, setShowModal] = useState(false);
  const handleShowEventsClick = () => {
    setShowEvents(!showEvents);
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
      {showEvents && (
        <EventsList events={eventsList} />
      )}
      <br />
      <button onClick={() => setShowModal(true)}>
        T&Cs apply - click for more details.{' '}
      </button>
      {showModal && (
        <Modal closeModal={setShowModal}>
          <h2>Terms and Conditions</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus odio
            modi ratione illum unde reiciendis, repudiandae perspiciatis at non
            provident quas aut ad? Illo, itaque. Officiis, vero. Officia,
            corporis ut.
          </p>
        </Modal>
      )}
    </div>
  );
}

export default App;
