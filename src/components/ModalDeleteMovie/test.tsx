import { render, screen } from '@testing-library/react';

import ModalDeleteMovie from '.';

describe('<ModalDeleteMovie />', () => {
  it('should render the heading', () => {
    const { container } = render(<ModalDeleteMovie />);

    expect(screen.getByRole('heading', { name: /ModalDeleteMovie/i }))
    .toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
