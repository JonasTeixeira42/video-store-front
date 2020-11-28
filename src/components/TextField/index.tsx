import React, { useState, InputHTMLAttributes } from 'react';

import * as S from './styles';

export type TextFieldProps = {
  onInput?: (inputName: string, inputValue: string) => void;
  label?: string;
  labelFor?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  name?: string;
  error?: string;
  type?: 'text' | 'file';
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  label,
  labelFor = '',
  icon,
  error,
  initialValue = '',
  type = 'text',
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    const newValue = value;
    setValue(newValue);

    !!onInput && onInput(name, value);
  };

  return (
    <S.Wrapper error={!!error}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input type={type} onChange={onChange} value={value} {...props} />
        {!!icon && <S.Icon>{icon}</S.Icon>}
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};

export default TextField;
