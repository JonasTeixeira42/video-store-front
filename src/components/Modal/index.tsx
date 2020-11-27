import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

export type ModalProps = {
  children: React.ReactNode;
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
      className="Modal"
      overlayClassName="Overlay"
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
