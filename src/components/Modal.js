import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ children, closeModal }) {
  return ReactDOM.createPortal(
    <div className='modal-backdrop'>
      <div className='modal'>
        {children}
        <button onClick={() => closeModal(false)}>Close</button>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
