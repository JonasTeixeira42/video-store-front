import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const ImageInput = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall} 0;
    width: 100%;
    height: 48px;
    position: relative;
    align-self: center;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: ${darken(0.1, theme.colors.primary)};
    }

    & > svg {
      margin-left: ${theme.spacings.xxsmall};
    }

    input {
      display: none;
    }
  `}
`;
