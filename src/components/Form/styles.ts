import styled, { css } from 'styled-components';

import * as ButtonStyles from 'components/Button/styles';
import * as TextFieldStyles from 'components/TextField/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }

    ${ButtonStyles.Wrapper} {
      margin-left: auto;
      margin-top: ${theme.spacings.medium};
    }
  `}
`;

export const FormWrapper = styled.form``;
