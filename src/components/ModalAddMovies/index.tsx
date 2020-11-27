import React, { FormEvent, useCallback, useState } from 'react';
import Modal, { ModalProps } from 'components/Modal';
import { AddBox } from '@styled-icons/material-outlined/';

import TextField from 'components/TextField';
import Heading from 'components/Heading';
import Form from 'components/Form';

import * as S from 'components/ModalStyles';

const initialData = {
  name: '',
  director: '',
};

export type ModalAddMoviesProps = Omit<ModalProps, 'children'>;

const ModalAddMovies = ({ isOpen = false, setIsOpen }: ModalAddMoviesProps) => {
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
            label="Director"
            placeholder="Director"
            name="director"
            onInput={() => handleInput}
          />
        </Form>
      </Modal>
    </S.Wrapper>
  );
};

export default ModalAddMovies;
