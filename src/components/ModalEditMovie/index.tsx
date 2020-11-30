import React, {
  FormEvent,
  ChangeEvent,
  useCallback,
  useState,
  useEffect,
} from 'react';
import { AddBox } from '@styled-icons/material-outlined/';
import { CloudUpload as Upload } from '@styled-icons/material-outlined/';

import TextField from 'components/TextField';
import Heading from 'components/Heading';
import Form from 'components/Form';

import Modal, { ModalProps } from 'components/Modal';

import * as ModalStyles from 'components/ModalStyles';
import * as S from './styles';

export type Movie = {
  id: string;
  name: string;
  image?: string;
  url?: string;
  director: {
    id: string;
    name: string;
  };
};

type FormDataProps = {
  name: string | undefined;
  director: string | undefined;
};

export type ModalEditMovieProps = {
  movie?: Movie;
} & Omit<ModalProps, 'children'>;

const ModalEditMovie = ({ movie, isOpen, setIsOpen }: ModalEditMovieProps) => {
  const [formData, setFormData] = useState<FormDataProps>({} as FormDataProps);
  const [movieImage, setMovieImage] = useState<File | null>(null);

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

  const handleChangeImage = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setMovieImage(e.target.files[0]);
    }
  }, []);

  return (
    <ModalStyles.Wrapper aria-hidden={!isOpen}>
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

export default ModalEditMovie;
