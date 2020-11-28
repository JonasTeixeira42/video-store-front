import React, { FormEvent, useCallback, useState, useEffect } from 'react';
import { AddBox } from '@styled-icons/material-outlined/';

import TextField from 'components/TextField';
import Heading from 'components/Heading';
import Form from 'components/Form';

import Modal, { ModalProps } from 'components/Modal';

import * as S from 'components/ModalStyles';

export type Movie = {
  id: string;
  name: string;
  image?: string;
  director: {
    id: string;
    name: string;
  };
};

type FormDataProps = {
  name: string | undefined;
  director: string | undefined;
};

export type ModalEditFoodProps = {
  movie?: Movie;
} & Omit<ModalProps, 'children'>;

const ModalEditFood = ({ movie, isOpen, setIsOpen }: ModalEditFoodProps) => {
  const [formData, setFormData] = useState<FormDataProps>({} as FormDataProps);

  useEffect(() => {
    const initialData = {
      name: movie?.name,
      director: movie?.director?.name,
    };

    setFormData(initialData);
  }, [movie]);

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      console.log(formData);
    },
    [formData],
  );

  const handleInput = useCallback(
    (inputName: string, inputValue: string) => {
      console.log('Nome', inputName, 'Value', inputValue);
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
          Edit a Movie
        </Heading>
        <Form
          buttonLabel="Edit Movie"
          buttonIcon={<AddBox size={24} />}
          onSubmit={handleSubmit}
        >
          <TextField
            label="Name"
            placeholder="Name"
            name="name"
            onInput={handleInput}
            initialValue={formData.name}
          />
          <TextField
            label="Director"
            placeholder="Director"
            name="director"
            initialValue={formData.director}
            onInput={handleInput}
          />
        </Form>
      </Modal>
    </S.Wrapper>
  );
};

export default ModalEditFood;
