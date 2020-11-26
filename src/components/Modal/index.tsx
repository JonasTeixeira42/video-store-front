import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

export type ModalProps = {
  children: React.ReactNode;
  modalTitle?: string;
  isOpen: boolean;
  setIsOpen?: () => void;
};

const Modal = ({ children, isOpen = false, setIsOpen }: ModalProps) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      closeTimeoutMS={300}
      style={{
        content: {
          maxWidth: '42rem',
          minWidth: '30rem',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
