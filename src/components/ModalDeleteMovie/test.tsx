import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import ModalDeleteMovie from '.';

const mock = {
  id: '1',
  name: 'Ghost in the shell',
  image: 'https://source.unsplash.com/300x140',
  url: 'https://source.unsplash.com/300x140',
  director: {
    id: '1',
    name: 'Masamune Shirow',
  },
};

describe('<ModalDeleteMovie />', () => {
  it('should render the Modal correctly', () => {
    const { container } = renderWithTheme(
      <ModalDeleteMovie movie={mock} isOpen={true} />,
    );

    expect(screen.getByText(/ghost in the shell/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sim/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /não/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should call onDelete function when passed', () => {
    const onDelete = jest.fn();

    renderWithTheme(
      <ModalDeleteMovie movie={mock} isOpen={true} onDelete={onDelete} />,
    );

    const button = screen.getByRole('button', { name: /sim/i });

    fireEvent.click(button);

    expect(onDelete).toHaveBeenCalled();
    expect(onDelete).toHaveBeenLastCalledWith(mock.id);
  });
});
