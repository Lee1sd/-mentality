import React from 'react';
import '../style/Modal.css';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button className="close-button" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
}

export default Modal;
