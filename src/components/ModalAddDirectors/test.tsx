import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import ModalAddDirectors from '.';

describe('<ModalAddDirectors />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<ModalAddDirectors isOpen={true} />);

    const firsChild = container.firstElementChild;

    expect(firsChild?.getAttribute('aria-hidden')).toBe('false');
    expect(
      screen.getByRole('heading', { name: /Add a Movie/i }),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Add Movie/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
