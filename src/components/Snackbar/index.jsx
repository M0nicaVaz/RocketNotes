import { Container } from './styles.js';
import { FiX } from 'react-icons/fi';
import React, { useState, useEffect } from 'react';

export function Snackbar({ isOpen, onClose, children }) {
  const [timeIsUp, setTimeIsUp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimeIsUp(true);
    }, 8000);
  }, []);

  if (timeIsUp) {
    return null;
  }

  return (
    <Container isOpen={isOpen}>
      <span>{children}</span>
      <button onClick={onClose}>
        <FiX />
      </button>
    </Container>
  );
}
