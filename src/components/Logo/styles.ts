import styled, { css } from 'styled-components';
import { LogoProps } from '.';

const wrapperModifiers = {
  normal: () => css`
    ${LogoWrapper} {
      width: 4.5rem;
      height: 4.5rem;
    }

    ${LogoText} {
      font-size: 3.2rem;
      left: calc(4.5rem + 0.5rem);
      bottom: -1.2rem;
    }
  `,

  large: () => css`
    ${LogoWrapper} {
      width: 5.9rem;
      height: 5.9rem;
    }

    ${LogoText} {
      font-size: 4rem;
      left: calc(5.9rem + 0.5rem);
      bottom: -1.2rem;
    }
  `,

  hideOnMobile: () => css`
    ${LogoWrapper} {
      width: 4.5rem;
      height: 4.5rem;
    }

    ${LogoText} {
      display: none;
      pointer-events: none;
    }
  `,
};

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, size, color, hiddenOnMobile }) => css`
    display: flex;
    align-items: center;
    position: relative;
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size]};

    ${!!hiddenOnMobile && wrapperModifiers.hideOnMobile};
  `}
`;

export const LogoWrapper = styled.div``;

export const LogoText = styled.p`
  position: absolute;
`;
