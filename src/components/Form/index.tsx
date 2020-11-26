import React from 'react';
import Button from 'components/Button';
import TextField, { TextFieldProps } from 'components/TextField';

import * as S from './styles';

export type FormProps = {
  inputs: TextFieldProps[];
  buttonLabel: string;
  buttonIcon: React.ReactNode;
};

const Form = ({ inputs, buttonLabel, buttonIcon }: FormProps) => {
  return (
    <S.Wrapper>
      <S.FormWrapper>
        {inputs.map((input) => (
          <TextField key={input.label} {...input} />
        ))}

        <Button size="small" type="submit" icon={buttonIcon}>
          {buttonLabel}
        </Button>
      </S.FormWrapper>
    </S.Wrapper>
  );
};

export default Form;
