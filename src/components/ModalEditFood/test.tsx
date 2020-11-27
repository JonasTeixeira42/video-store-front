import { render, screen } from '@testing-library/react';

import ModalEditFood from '.';

describe('<ModalEditFood />', () => {
  it('should render the heading', () => {
    const { container } = render(<ModalEditFood />);

    expect(screen.getByRole('heading', { name: /ModalEditFood/i }))
    .toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
