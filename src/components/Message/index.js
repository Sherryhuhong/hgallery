import React, { useContext, useEffect, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import { PhotoContext } from '../../context/PhotoContext';

export default function Message() {
  const [show, setShow] = useState(false);
  const { message, resetMessage } = useContext(PhotoContext);

  useEffect(() => {
    console.log(message);
    if (message) {
      setShow(true);
    }
  }, [message]);

  const closeToast = () => {
    setShow(false);
    resetMessage();
  };

  return (
    <Toast
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
      }}
      show={show}
      onClose={closeToast}
    >
      <Toast.Header>
        <strong className="mr-auto">Error message</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
}
