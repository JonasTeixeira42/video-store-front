import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import { AddBox } from '@styled-icons/material-outlined/';

import Button from '.';

describe('<Button />', () => {
  it('should render the button with large size', () => {
    const { container } = renderWithTheme(<Button>Movies</Button>);

    const button = screen.getByRole('button', { name: /movies/i });

    expect(button).toBeInTheDocument();

    expect(button.firstElementChild).toHaveStyle({
      padding: '1.6rem 2.4rem',
    });

    expect(button).toHaveStyle({
      color: '#FAFAFA',
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render small size when size passed', () => {
    renderWithTheme(<Button size="small">Movies</Button>);

    expect(
      screen.getByRole('button', { name: /movies/i }).firstElementChild,
    ).toHaveStyle({
      padding: '1.6rem',
    });
  });

  it('should render black color when color passed', () => {
    renderWithTheme(<Button color="lightBlack">Movies</Button>);

    expect(screen.getByRole('button', { name: /movies/i })).toHaveStyle({
      color: '#3D3D4D',
    });
  });

  it('should render icon version', () => {
    renderWithTheme(<Button icon={<AddBox data-testid="icon" />} />);

    expect(screen.getByTestId('icon').parentElement).toBeInTheDocument();
  });

  it('should render secondary color background by default', () => {
    renderWithTheme(<Button icon={<AddBox data-testid="icon" />} />);

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({
      background: '#04d361',
    });
  });

  it('should render primary color background when background passed', () => {
    renderWithTheme(
      <Button background="primary" icon={<AddBox data-testid="icon" />} />,
    );

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({
      background: '#F231A5',
    });
  });

  it('should render white color background when background passed', () => {
    renderWithTheme(
      <Button background="white" icon={<AddBox data-testid="icon" />} />,
    );

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({
      background: '#FAFAFA',
    });
  });
});
