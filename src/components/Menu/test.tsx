import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Menu from '.';

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getAllByText('Add Movie')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Add Director')[0]).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: /Clapperboard/i }),
    ).toBeInTheDocument();
  });

  it('should handle the open/close menu', () => {
    renderWithTheme(<Menu />);

    const fullMenu = screen.getByRole('navigation', { hidden: true });

    expect(fullMenu.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenu).toHaveStyle({ opacity: 0 });

    fireEvent.click(screen.getByLabelText(/open menu/i));
    expect(fullMenu.getAttribute('aria-hidden')).toBe('false');
    expect(fullMenu).toHaveStyle({ opacity: 1 });

    fireEvent.click(screen.getByLabelText(/close menu/i));
    expect(fullMenu.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenu).toHaveStyle({ opacity: 0 });
  });

  it('should open Add Movie Modal', () => {
    renderWithTheme(<Menu />);

    fireEvent.click(screen.getAllByText('Add Movie')[0]);

    expect(
      screen.getByRole('heading', { name: /Add a Movie/i }),
    ).toBeInTheDocument();
  });

  it('should open Add Director Modal', () => {
    renderWithTheme(<Menu />);

    fireEvent.click(screen.getAllByText('Add Director')[0]);

    expect(
      screen.getByRole('heading', { name: /Add a Director/i }),
    ).toBeInTheDocument();
  });
});
