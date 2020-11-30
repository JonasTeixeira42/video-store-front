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
import * as SelectStyles from 'components/SelectInputStyles';
import * as S from './styles';
import { OptionProps } from 'components/ModalAddMovies';
import api from 'services/api';

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
  fetchMovies?: () => void;
} & Omit<ModalProps, 'children'>;

const ModalEditMovie = ({
  movie,
  isOpen,
  setIsOpen,
  fetchMovies,
}: ModalEditMovieProps) => {
  const [formData, setFormData] = useState<FormDataProps>({} as FormDataProps);
  const [options, setOptions] = useState<OptionProps[]>();
  const [movieImage, setMovieImage] = useState<File | null>(null);

  useEffect(() => {
    async function loadDirectors(): Promise<void> {
      const response = await api.get('directors');

      setOptions(response.data);
    }

    const initialData = {
      name: movie?.name,
      director: movie?.director?.id,
    };

    setFormData(initialData);

    loadDirectors();
  }, [movie]);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const data = new FormData();
      data.append('name', formData.name || '');
      data.append('file', movieImage || '');
      data.append('director_id', formData.director || '');

      try {
        await api.put(`movies/${movie?.id}`, data);

        !!fetchMovies && fetchMovies();

        alert('Success');
      } catch (error) {
        console.log(error.response.data.error);
      }
    },
    [formData, movieImage, movie?.id, fetchMovies],
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

  const handleChangeSelect = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      handleInput(e.target.name, e.target.value);
    },
    [handleInput],
  );

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

          <SelectStyles.Wrapper>
            <SelectStyles.Label htmlFor="director">Director</SelectStyles.Label>

            <SelectStyles.SelectWrapper>
              <SelectStyles.Select
                id="director"
                name="director"
                value={formData.director}
                onChange={handleChangeSelect}
              >
                <option hidden value="">
                  Select a director
                </option>
                {!!options &&
                  options.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
              </SelectStyles.Select>
            </SelectStyles.SelectWrapper>
          </SelectStyles.Wrapper>

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
