import React, { FormEvent, useCallback, useState } from 'react';
import Modal, { ModalProps } from 'components/Modal';
import Heading from 'components/Heading';
import Form from 'components/Form';
import { AddBox } from '@styled-icons/material-outlined/';

import TextField from 'components/TextField';

import * as S from './styles';

const initialData = {
  name: '',
  description: '',
};

const ModalAddMovies = ({
  isOpen = true,
  setIsOpen,
}: Omit<ModalProps, 'children'>) => {
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
    <S.Wrapper>
      <Modal isOpen={isOpen}>
        <Heading lineLeft lineColor="primary">
          Add a Movie
        </Heading>
        <Form
          buttonLabel="Add Movie"
          buttonIcon={<AddBox size={24} />}
          onSubmit={handleSubmit}
        >
          <TextField
            label="Name"
            placeholder="Name"
            name="name"
            onInput={() => handleInput}
          />
          <TextField
            label="Description"
            placeholder="Description"
            name="description"
            onInput={() => handleInput}
          />
        </Form>
      </Modal>
    </S.Wrapper>
  );
};

export default ModalAddMovies;
