import React, {
  FormEvent,
  useCallback,
  useState,
  useEffect,
  ChangeEvent,
} from 'react';
import Modal, { ModalProps } from 'components/Modal';
import { AddBox } from '@styled-icons/material-outlined/';
import { CloudUpload as Upload } from '@styled-icons/material-outlined/';

import TextField from 'components/TextField';
import Heading from 'components/Heading';
import Form from 'components/Form';

import * as ModalStyles from 'components/ModalStyles';
import * as SelectStyles from 'components/SelectInputStyles';
import * as S from './styles';

import api from 'services/api';

const initialData = {
  name: '',
  director: '',
};

export type OptionProps = {
  id: string;
  name: string;
};

export type ModalAddMoviesProps = Omit<ModalProps, 'children'>;

const ModalAddMovies = ({ isOpen = false, setIsOpen }: ModalAddMoviesProps) => {
  const [formData, setFormData] = useState(initialData);
  const [options, setOptions] = useState<OptionProps[]>();
  const [movieImage, setMovieImage] = useState<File>();

  useEffect(() => {
    async function loadDirectors(): Promise<void> {
      const response = await api.get('directors');

      setOptions(response.data);
    }

    loadDirectors();
  }, []);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const data = new FormData();
      data.append('name', formData.name);
      data.append('file', movieImage || '');
      data.append('director_id', formData.director);

      try {
        await api.post('movies', data);

        alert('Sucess');
      } catch (error) {
        console.log(error.response.data.error);
      }
    },
    [formData, movieImage],
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
            onInput={handleInput}
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

export default ModalAddMovies;
