import React from 'react';

import * as S from './styles';

export type LineColors = 'primary' | 'secondary';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black';
  lineLeft?: boolean;
  lineBottom?: boolean;
  lineColor?: LineColors;
  size?: 'normal' | 'small';
};

const Heading = ({
  children,
  color = 'black',
  lineLeft = false,
  lineBottom = false,
  lineColor = 'primary',
  size = 'normal',
}: HeadingProps) => {
  return (
    <S.Wrapper
      color={color}
      lineLeft={lineLeft}
      lineBottom={lineBottom}
      lineColor={lineColor}
      size={size}
    >
      {children}
    </S.Wrapper>
  );
};

export default Heading;
