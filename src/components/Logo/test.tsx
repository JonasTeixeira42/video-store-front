import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Logo from '.';

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />);

    expect(
      screen.getByLabelText(/clapperboard/i).parentElement?.parentElement,
    ).toHaveStyle({ color: '#FAFAFA' });
  });

  it('should render a black label when color passed', () => {
    renderWithTheme(<Logo color="black" />);

    expect(
      screen.getByLabelText(/clapperboard/i).parentElement?.parentElement,
    ).toHaveStyle({ color: '#030517' });
  });

  it('should render a normal size by default', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/clapperboard/i).parentElement).toHaveStyle({
      width: '4.5rem',
      height: '4.5rem',
    });
  });

  it('should render a larger size when size passed', () => {
    renderWithTheme(<Logo size="large" />);

    expect(screen.getByLabelText(/clapperboard/i).parentElement).toHaveStyle({
      width: '5.9rem',
      height: '5.9rem',
    });
  });

  it('should render a normal size without text when hideOnMobile', () => {
    renderWithTheme(<Logo hiddenOnMobile={true} />);

    expect(
      screen.getByLabelText(/clapperboard/i).parentElement?.parentElement,
    ).toHaveStyleRule('height', '4.5rem', {
      media: '(max-width: 768px)',
    });
  });
});
