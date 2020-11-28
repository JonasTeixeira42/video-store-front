import React from 'react';
import Link from 'next/link';

import Logo from 'components/Logo';

import * as S from './styles';
import Heading from 'components/Heading';

const Footer = () => {
  return (
    <S.Wrapper>
      <Logo color="black" size="normal" />

      <S.Content>
        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Contact
          </Heading>

          <a href="mailto:sac@soitic.com">sac@soitic.com</a>
        </S.Column>

        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Follow us
          </Heading>

          <nav aria-labelledby="social media">
            <a
              href="https://www.instagram.com/"
              target="_black"
              rel="noopenner, noreferrer"
            >
              Instragram
            </a>

            <a
              href="https://twitter.com/home"
              target="_black"
              rel="noopenner, noreferrer"
            >
              Twitter
            </a>

            <a
              href="https://www.youtube.com/"
              target="_black"
              rel="noopenner, noreferrer"
            >
              Youtube
            </a>

            <a
              href="https://www.facebook.com/"
              target="_black"
              rel="noopenner, noreferrer"
            >
              Facebook
            </a>
          </nav>
        </S.Column>

        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Links
          </Heading>

          <nav aria-labelledby="footer resources">
            <Link href="/">
              <a>Home</a>
            </Link>
          </nav>
        </S.Column>

        <S.Column aria-labelledby="footer contact">
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Location
          </Heading>

          <span>Lorem Ipsum dolor sit</span>
          <span>Lorem Ipsum</span>
          <span>Lorem, Ipsum dolor</span>
        </S.Column>
      </S.Content>

      <S.Copyright>Soitic 2020 All rights reserved</S.Copyright>
    </S.Wrapper>
  );
};

export default Footer;
