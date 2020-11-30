import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import { darken } from 'polished';

import MovieCard from '.';

import movieMock from './mock';

describe('<MovieCard />', () => {
  it('should render the card', () => {
    const { container } = renderWithTheme(<MovieCard movie={movieMock} />);

    expect(
      screen.getByRole('heading', { name: movieMock.name }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: movieMock.director.name }),
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: movieMock.name })).toHaveAttribute(
      'src',
      movieMock.url,
    );

    const buttons = screen.getAllByRole('button');

    expect(buttons[0]).toHaveStyle({
      background: darken(0.1, '#F231A5'),
    });

    expect(buttons[1]).toHaveStyle({
      background: darken(0.1, '#04d361'),
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should call onDelete when delete button is clicked', () => {
    const onDelete = jest.fn();

    renderWithTheme(<MovieCard movie={movieMock} onDelete={onDelete} />);

    const button = screen.getAllByRole('button');

    fireEvent.click(button[0]);

    expect(onDelete).toBeCalled();
    expect(onDelete).toHaveBeenCalledWith(movieMock.id);
    expect(onDelete).toHaveBeenCalledTimes(1);
  });

  it('should call onEdit when edit button is clicked', () => {
    const onEdit = jest.fn();

    renderWithTheme(<MovieCard movie={movieMock} onEdit={onEdit} />);

    const button = screen.getAllByRole('button');

    fireEvent.click(button[1]);

    expect(onEdit).toBeCalled();
    expect(onEdit).toHaveBeenCalledWith(movieMock);
    expect(onEdit).toHaveBeenCalledTimes(1);
  });
});
