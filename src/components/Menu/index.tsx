import React, { useState, useCallback } from 'react';
import { Menu3 as MenuIcon } from '@styled-icons/remix-line/Menu3';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

import Logo from 'components/Logo';
import MediaMatch from 'components/MediaMatch';
import ModalAddMovies from 'components/ModalAddMovies';
import ModalAddDirectors from 'components/ModalAddDirectors';

import * as S from './styles';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openAddMovie, setOpenAddMovie] = useState(false);
  const [openAddDirector, setOpenAddDirector] = useState(false);

  const toggleAddModal = useCallback(() => {
    setOpenAddMovie(!openAddMovie);
  }, [openAddMovie]);

  const toggleDirectorModal = useCallback(() => {
    setOpenAddDirector(!openAddDirector);
  }, [openAddDirector]);

  return (
    <>
      <ModalAddMovies isOpen={openAddMovie} setIsOpen={toggleAddModal} />
      <ModalAddDirectors
        isOpen={openAddDirector}
        setIsOpen={toggleDirectorModal}
      />
      <S.Wrapper>
        <Logo size="normal" hiddenOnMobile />

        <MediaMatch greaterThan="medium">
          <S.MenuNav>
            <S.MenuOption onClick={toggleAddModal}>Add Movie</S.MenuOption>
            <S.MenuOption onClick={toggleDirectorModal}>
              Add Director
            </S.MenuOption>
          </S.MenuNav>
        </MediaMatch>

        <MediaMatch lessThan="medium">
          <S.IconWrapper onClick={() => setIsOpen(true)}>
            <MenuIcon aria-label="Open Menu" />
          </S.IconWrapper>
        </MediaMatch>

        <S.FullMenu aria-hidden={!isOpen} isOpen={isOpen}>
          <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />

          <S.MenuNav>
            <S.MenuOption onClick={toggleAddModal}>Add Movie</S.MenuOption>
            <S.MenuOption onClick={toggleDirectorModal}>
              Add Director
            </S.MenuOption>
          </S.MenuNav>
        </S.FullMenu>
      </S.Wrapper>
    </>
  );
};

export default Menu;
