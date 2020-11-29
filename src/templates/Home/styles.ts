import styled, { css } from 'styled-components';

import * as MenuStyles from 'components/Menu/styles';
import * as MovieCardStyles from 'components/MovieCard/styles';
import * as FooterStyles from 'components/Footer/styles';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
  `}
`;

export const SectionMenu = styled(Section)`
  ${({ theme }) => css`
    ${MenuStyles.Wrapper} {
      margin-bottom: calc(${theme.spacings.xlarge} * 2);
    }
  `}
`;

export const SectionMovies = styled(Section)`
  flex: 1;
`;

export const MoviesWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;

    ${MovieCardStyles.Wrapper} {
      margin: ${theme.spacings.small};
    }
  `}
`;

export const SectionFooter = styled(Section)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    max-width: 100%;
    margin-top: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.lightBg};

    div {
      width: 100%;
      max-width: ${theme.grid.container};

      ${FooterStyles.Wrapper} {
        margin-top: ${theme.spacings.medium};
      }
    }
  `}
`;

export const InputWrapper = styled.div`
  max-width: 34rem;
  margin: 0 auto;
`;
