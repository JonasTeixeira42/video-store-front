import React, { useState, InputHTMLAttributes } from 'react';

import * as S from './styles';

export type TextFieldProps = {
  onInput?: (value: string) => void;
  label?: string;
  labelFor?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  label,
  labelFor = '',
  icon,
  error,
  initialValue = '',
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onInput && onInput(newValue);
  };

  return (
    <S.Wrapper error={!!error}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input type="text" onChange={onChange} value={value} {...props} />
        {!!icon && <S.Icon>{icon}</S.Icon>}
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};

export default TextField;
