import React, { FormEvent } from 'react';
import Button from 'components/Button';
import TextField, { TextFieldProps } from 'components/TextField';

import * as S from './styles';

export type FormProps = {
  children: React.ReactNode;
  buttonLabel: string;
  buttonIcon: React.ReactNode;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
};

const Form = ({ children, buttonLabel, buttonIcon, onSubmit }: FormProps) => {
  return (
    <S.Wrapper>
      <S.FormWrapper onSubmit={onSubmit}>
        {children}

        <Button size="small" type="submit" icon={buttonIcon}>
          {buttonLabel}
        </Button>
      </S.FormWrapper>
    </S.Wrapper>
  );
};

export default Form;
