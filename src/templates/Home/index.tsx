/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useCallback, useEffect } from 'react';
import { Search } from '@styled-icons/material-outlined/';

import MovieCard from 'components/MovieCard';
import Footer from 'components/Footer';
import TextField from 'components/TextField';
import Menu from 'components/Menu';

import * as S from './styles';

import moviesMock from './mock';
import ModalEditFood, { Movie } from 'components/ModalEditFood';

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [editingFood, setEditingFood] = useState<Movie>({} as Movie);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  useEffect(() => {
    setMovies(moviesMock);
    setFilteredMovies(moviesMock);
  }, []);

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

  const handleEditModal = useCallback(
    (movie: Movie) => {
      setEditingFood(movie);
      handleOpenEditModal();
    },
    [handleOpenEditModal],
  );

  return (
    <>
      <ModalEditFood
        movie={editingFood}
        isOpen={openEditModal}
        setIsOpen={handleOpenEditModal}
      />
      <section>
        <S.SectionMenu>
          <Menu />
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
              />
            ))}
          </S.MoviesWrapper>
        </S.SectionMovies>

        <S.SectionFooter>
          <div>
            <Footer />
          </div>
        </S.SectionFooter>
      </section>
    </>
  );
};

export default Home;
