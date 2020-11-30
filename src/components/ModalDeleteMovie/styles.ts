import styled, { css } from 'styled-components';

import * as ButtonStyles from 'components/Button/styles';

export const Wrapper = styled.div``;

export const Text = styled.div`
  & > span {
    font-size: 1.8rem;
  }
`;

export const OperationsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    margin-top: ${theme.spacings.small};

    ${ButtonStyles.Wrapper} {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`;
