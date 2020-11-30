import React from 'react';

import Modal, { ModalProps } from 'components/Modal';
import { Movie } from 'components/ModalEditMovie';
import Button from 'components/Button';

import * as S from './styles';

export type ModalDeleteMoviesProps = {
  movie: Movie;
  onDelete: (id: string) => void;
} & Omit<ModalProps, 'children'>;

const ModalDeleteMovie = ({
  movie,
  isOpen = false,
  onDelete,
  setIsOpen,
}: ModalDeleteMoviesProps) => {
  const handleSubmitDelete = () => {
    !!onDelete && onDelete(movie.id);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <S.Wrapper>
        <S.Text>
          <span>{`Deseja remover o filme ${movie.name}?`}</span>
        </S.Text>
        <S.OperationsWrapper>
          <Button size="small" background="secondary" onClick={setIsOpen}>
            Não
          </Button>
          <Button
            size="small"
            background="primary"
            onClick={() => onDelete(movie.id)}
          >
            Sim
          </Button>
        </S.OperationsWrapper>
      </S.Wrapper>
    </Modal>
  );
};

export default ModalDeleteMovie;
