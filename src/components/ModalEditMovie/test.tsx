import { render, screen } from '@testing-library/react';

import ModalEditMovie from '.';

describe('<ModalEditMovie />', () => {
  it('should render the heading', () => {
    const { container } = render(<ModalEditMovie />);

    expect(
      screen.getByRole('heading', { name: /ModalEditMovie/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
