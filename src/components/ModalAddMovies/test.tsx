import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import ModalAddMovies from '.';

describe('<ModalAddMovies />', () => {
  it('should render the Modal', () => {
    const { container } = renderWithTheme(<ModalAddMovies isOpen={true} />);

    const firsChild = container.firstElementChild;

    expect(firsChild?.getAttribute('aria-hidden')).toBe('false');
    expect(
      screen.getByRole('heading', { name: /Add a Movie/i }),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Add Movie/i }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/choose a file/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not show modal when isOpen is false', () => {
    const { container } = renderWithTheme(<ModalAddMovies isOpen={false} />);

    const firsChild = container.firstElementChild;

    expect(firsChild?.getAttribute('aria-hidden')).toBe('true');
  });
});
