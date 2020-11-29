import React from 'react';
import { Edit } from 'styled-icons/material-outlined';
import { Delete } from 'styled-icons/material-outlined/';

import Button from 'components/Button';
import { Movie } from 'components/ModalEditFood';

import * as S from './styles';

export type MovieCardProps = {
  movie: Movie;
  onEdit?: (movie: Movie) => void;
  onDelete?: (id: string) => void;
};

const MovieCard = ({ movie, onEdit, onDelete }: MovieCardProps) => {
  return (
    <S.Wrapper>
      {!!movie.image && (
        <S.ImageBox>
          <img src={movie.url} alt={movie.name} />
        </S.ImageBox>
      )}
      <S.Content>
        <S.Info>
          <S.Title>{movie.name}</S.Title>
          <S.Director>{movie.director.name}</S.Director>
        </S.Info>
        <S.OperationBox>
          <Button
            size="xsmall"
            background="primary"
            icon={<Delete size={20} />}
            onClick={() => onDelete!(movie.id)}
          />
          <Button
            size="xsmall"
            icon={<Edit size={20} />}
            onClick={() => onEdit!(movie)}
          />
        </S.OperationBox>
      </S.Content>
    </S.Wrapper>
  );
};

export default MovieCard;
