import Heading from 'components/Heading';
import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

import * as S from './styles';

export type ModalProps = {
  children: React.ReactNode;
  modalTitle?: string;
  isOpen: boolean;
  setIsOpen?: () => void;
};

const Modal = ({
  children,
  modalTitle,
  isOpen = false,
  setIsOpen,
}: ModalProps) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <S.Wrapper>
      <ReactModal
        shouldCloseOnOverlayClick={!false}
        onRequestClose={setIsOpen}
        isOpen={modalStatus}
        ariaHideApp={false}
        closeTimeoutMS={300}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#F0F0F5',
            color: '#000000',
            borderRadius: '8px',
            width: '736px',
            border: 'none',
          },
          overlay: {
            backgroundColor: '#121214e6',
          },
        }}
      >
        {!!modalTitle && <Heading>{modalTitle}</Heading>}
        {children}
      </ReactModal>
    </S.Wrapper>
  );
};

export default Modal;
