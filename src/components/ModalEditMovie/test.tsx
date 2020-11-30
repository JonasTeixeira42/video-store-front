import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import ModalEditMovie from '.';

describe('<ModalEditMovie />', () => {
  it('should render the Modal', () => {
    const { container } = renderWithTheme(<ModalEditMovie isOpen={true} />);

    const firsChild = container.firstElementChild;

    expect(firsChild?.getAttribute('aria-hidden')).toBe('false');
    expect(
      screen.getByRole('heading', { name: /Edit a Movie/i }),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Edit Movie/i }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/choose a file/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
