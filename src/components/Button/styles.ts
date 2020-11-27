import styled, { css, DefaultTheme } from 'styled-components';
import { darken } from 'polished';

import { BackgroundColors, ButtonProps } from '.';

type WrapperProps = {
  hasIcon: boolean;
  hasChildren: boolean;
} & Pick<ButtonProps, 'size' | 'color' | 'background'>;

const wrapperModifiers = {
  xsmall: (theme: DefaultTheme) => css`
    p {
      padding: ${theme.spacings.xxsmall};
    }
  `,

  small: (theme: DefaultTheme) => css`
    p {
      padding: ${theme.spacings.xsmall};
    }
  `,

  large: (theme: DefaultTheme) => css`
    p {
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    }
  `,

  withIcon: (theme: DefaultTheme, backgroundColor: BackgroundColors) => css`
    background: ${darken(0.1, theme.colors[backgroundColor])};

    &:hover {
      background: ${darken(0.2, theme.colors[backgroundColor])};

      & > div {
        background: ${darken(0.1, theme.colors[backgroundColor])};
      }
    }
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, hasIcon, color, background, hasChildren }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    font-weight: 600;
    font-size: ${theme.font.sizes.medium};
    border-radius: ${theme.border.radius};
    border: 0;
    outline: 0;
    background: ${theme.colors[background!]};
    color: ${theme.colors[color!]};
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: ${darken(0.1, theme.colors[background!])};
    }

    div {
      display: flex;
      padding: ${theme.spacings.xsmall};
      background: ${theme.colors[background!]};
      border-radius: 0 ${theme.border.radius} ${theme.border.radius} 0;
      margin: 0 auto;
      transition: background 0.3s;
    }

    ${!!size && wrapperModifiers[size!](theme)};

    ${hasIcon && wrapperModifiers.withIcon(theme, background!)}

    ${!hasChildren &&
    css`
      div {
        border-radius: ${theme.border.radius};
      }
    `}
  `}
`;
