import React, { FormEvent, useCallback, useState } from 'react';
import { AddBox } from '@styled-icons/material-outlined/';

import Modal, { ModalProps } from 'components/Modal';
import TextField from 'components/TextField';
import Heading from 'components/Heading';
import Form from 'components/Form';

import * as S from 'components/ModalStyles';

const initialData = {
  name: '',
};

export type ModalAddDirectorsProps = Omit<ModalProps, 'children'>;

const ModalAddDirectors = ({
  isOpen = false,
  setIsOpen,
}: ModalAddDirectorsProps) => {
  const [formData, setFormData] = useState(initialData);

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      console.log(formData);
    },
    [formData],
  );

  const handleInput = useCallback(
    (inputName: string, inputValue: string) => {
      setFormData({
        ...formData,

        [inputName]: inputValue,
      });
    },
    [formData],
  );

  return (
    <S.Wrapper aria-hidden={!isOpen}>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Heading lineLeft lineColor="primary">
          Add a Director
        </Heading>
        <Form
          buttonLabel="Add Director"
          buttonIcon={<AddBox size={24} />}
          onSubmit={handleSubmit}
        >
          <TextField
            label="Name"
            placeholder="Name"
            name="name"
            onInput={() => handleInput}
          />
        </Form>
      </Modal>
    </S.Wrapper>
  );
};

export default ModalAddDirectors;
