/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useCallback, useEffect } from 'react';
import { Search } from '@styled-icons/material-outlined/';

import MovieCard from 'components/MovieCard';
import Footer from 'components/Footer';
import TextField from 'components/TextField';
import Menu from 'components/Menu';

import * as S from './styles';

import ModalEditMovie, { Movie } from 'components/ModalEditMovie';
import api from 'services/api';
import ModalDeleteMovie from 'components/ModalDeleteMovie';

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [editingMovie, setEditingMovie] = useState<Movie>({} as Movie);
  const [deleteMovie, setDeleteMovie] = useState<Movie>({} as Movie);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const fetchMovies = useCallback(async () => {
    const response = await api.get('movies');

    const { data } = response;

    setMovies(data);
    setFilteredMovies(data);
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const searchMovies = useCallback(
    (_: string, value: string) => {
      const filterMovies = movies.filter((movie) => {
        return (
          movie.name.toLowerCase().includes(value.toLowerCase()) ||
          movie.director.name.toLowerCase().includes(value.toLowerCase()) ||
          movie.id === value ||
          movie.director.id === value
        );
      });

      setFilteredMovies(filterMovies);
    },
    [movies],
  );

  const handleOpenEditModal = useCallback(() => {
    setOpenEditModal(!openEditModal);
  }, [openEditModal]);

  const handleOpenDeleteModal = useCallback(() => {
    setOpenDeleteModal(!openDeleteModal);
  }, [openDeleteModal]);

  const handleEditModal = useCallback(
    (movie: Movie) => {
      handleOpenEditModal();
      setEditingMovie(movie);
    },
    [handleOpenEditModal],
  );

  const handleDeleteModal = useCallback(
    (movie: Movie) => {
      handleOpenDeleteModal();
      setDeleteMovie(movie);
    },
    [handleOpenDeleteModal],
  );

  const submitDelete = useCallback(
    async (id: string) => {
      try {
        await api.delete(`movies/${id}`);

        fetchMovies();
        handleOpenDeleteModal();

        alert('Movie has been Removed');
      } catch (error) {
        alert(error.response.data.error);
      }
    },
    [fetchMovies],
  );

  return (
    <>
      <ModalEditMovie
        movie={editingMovie}
        isOpen={openEditModal}
        setIsOpen={handleOpenEditModal}
        fetchMovies={fetchMovies}
      />

      {openDeleteModal && (
        <ModalDeleteMovie
          movie={deleteMovie}
          isOpen={openDeleteModal}
          setIsOpen={handleOpenDeleteModal}
          onDelete={submitDelete}
        />
      )}

      <S.Wrapper>
        <S.SectionMenu>
          <Menu onCreateMovie={fetchMovies} />
        </S.SectionMenu>

        <S.SectionMovies>
          <S.InputWrapper>
            <TextField
              onInput={searchMovies}
              placeholder="Search a movie"
              icon={<Search />}
            />
          </S.InputWrapper>

          <S.MoviesWrapper>
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onEdit={handleEditModal}
                onDelete={handleDeleteModal}
              />
            ))}
          </S.MoviesWrapper>
        </S.SectionMovies>

        <S.SectionFooter>
          <div>
            <Footer />
          </div>
        </S.SectionFooter>
      </S.Wrapper>
    </>
  );
};

export default Home;
