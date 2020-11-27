import React from 'react';
import { Edit } from 'styled-icons/material-outlined';
import { Delete } from 'styled-icons/material-outlined/';

import { Movie } from 'components/ModalEditFood';

import * as S from './styles';
import Button from 'components/Button';

export type MovieCardProps = {
  movie: Movie;
  onEdit: (movie: Movie) => void;
  onDelete: (id: string) => void;
};

const MovieCard = ({ movie, onEdit, onDelete }: MovieCardProps) => {
  return (
    <S.Wrapper>
      {!!movie.image && (
        <S.ImageBox>
          <img src={movie.image} alt={movie.name} />
        </S.ImageBox>
      )}
      <S.Content>
        <S.Info>
          <S.Title>{movie.name}</S.Title>
          <S.Director>{movie.director.name}</S.Director>
        </S.Info>
        <S.OperationBox>
          <Button size="xsmall" icon={<Edit size={20} />} />
          <Button size="xsmall" icon={<Delete size={20} />} />
        </S.OperationBox>
      </S.Content>
    </S.Wrapper>
  );
};

export default MovieCard;
