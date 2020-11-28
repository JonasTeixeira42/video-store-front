import React, { FormEvent, useCallback, useState, ChangeEvent } from 'react';
import Modal, { ModalProps } from 'components/Modal';
import { AddBox } from '@styled-icons/material-outlined/';
import { CloudUpload as Upload } from '@styled-icons/material-outlined/';

import TextField from 'components/TextField';
import Heading from 'components/Heading';
import Form from 'components/Form';

import * as ModalStyles from 'components/ModalStyles';
import * as S from './styles';

const initialData = {
  name: '',
  director: '',
};

export type ModalAddMoviesProps = Omit<ModalProps, 'children'>;

const ModalAddMovies = ({ isOpen = false, setIsOpen }: ModalAddMoviesProps) => {
  const [formData, setFormData] = useState(initialData);
  const [movieImage, setMovieImage] = useState<File | null>(null);

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

  const handleChangeImage = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setMovieImage(e.target.files[0]);
    }
  }, []);

  return (
    <ModalStyles.Wrapper aria-hidden={!isOpen}>
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
          <S.ImageInput>
            <S.Label htmlFor="image">
              Choose a File
              <Upload size={24} />
              <input
                type="file"
                id="image"
                onChange={handleChangeImage}
                accept="image/x-png,image/jpeg"
              />
            </S.Label>
          </S.ImageInput>
        </Form>
      </Modal>
    </ModalStyles.Wrapper>
  );
};

export default ModalAddMovies;
