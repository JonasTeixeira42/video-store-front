import Menu from 'components/Menu';
import React from 'react';

import * as S from './styles';

import moviesMock from './mock';
import MovieCard from 'components/MovieCard';
import Footer from 'components/Footer';

const Home = () => {
  return (
    <section>
      <S.SectionMenu>
        <Menu />
      </S.SectionMenu>

      <S.SectionMovies>
        {moviesMock.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </S.SectionMovies>

      <S.SectionFooter>
        <div>
          <Footer />
        </div>
      </S.SectionFooter>
    </section>
  );
};

export default Home;
