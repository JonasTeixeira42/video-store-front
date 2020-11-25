import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Heading from '.';

describe('<Heading />', () => {
  it('should render the heading with black color by default', () => {
    renderWithTheme(<Heading>Video Store</Heading>);

    const heading = screen.getByRole('heading', { name: /Video Store/i });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveStyle({
      color: '#030517',
    });
  });

  it('should render white color when color passed', () => {
    renderWithTheme(<Heading color="white">Video Store</Heading>);

    expect(screen.getByRole('heading', { name: /Video Store/i })).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  it('should render the heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>Video Store</Heading>);

    expect(screen.getByRole('heading', { name: /Video Store/i })).toHaveStyle({
      'border-left': '0.7rem solid #F231A5',
    });
  });

  it('should render the heading with a line to the bottom', () => {
    renderWithTheme(<Heading lineBottom>Video Store</Heading>);

    expect(
      screen.getByRole('heading', { name: /Video Store/i }),
    ).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after',
    });
  });

  it('should render a Heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Video Store
      </Heading>,
    );

    const heading = screen.getByRole('heading', { name: /video store/i });

    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #F231A5' });
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after',
    });
  });

  it('should render a Heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        video store
      </Heading>,
    );

    const heading = screen.getByRole('heading', { name: /video store/i });

    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #04d361' });
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #04d361', {
      modifier: '::after',
    });
  });

  it('should render the heading with a small size', () => {
    renderWithTheme(<Heading size="small">video store</Heading>);

    expect(screen.getByRole('heading', { name: /video store/i })).toHaveStyle({
      'font-size': '1.6rem',
    });

    expect(
      screen.getByRole('heading', { name: /video store/i }),
    ).toHaveStyleRule('width', '3rem', {
      modifier: '::after',
    });
  });

  it('should render the heading with a normal size by default', () => {
    renderWithTheme(<Heading>video store</Heading>);

    expect(screen.getByRole('heading', { name: /video store/i })).toHaveStyle({
      'font-size': '2.0rem',
    });
  });
});
