import React, { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

export type BackgroundColors = 'white' | 'primary' | 'secondary';

export type ButtonProps = {
  size?: 'xsmall' | 'small' | 'large';
  color?: 'white' | 'lightBlack';
  background?: BackgroundColors;
  icon?: React.ReactNode;
} & ButtonType;

const Button = ({
  children,
  icon,
  size = 'large',
  color = 'white',
  background = 'secondary',
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper
      size={size}
      hasIcon={!!icon}
      hasChildren={!!children}
      color={color}
      background={background}
      {...props}
    >
      {!!children && <p>{children}</p>}

      {!!icon && <div>{icon}</div>}
    </S.Wrapper>
  );
};

export default Button;
