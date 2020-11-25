import { render, screen } from '@testing-library/react';

import Modal from '.';

describe('<Modal />', () => {
  it('should render the children', () => {
    const { container } = render(<Modal isOpen={true}>Modal</Modal>);

    const modal = screen.getByText(/modal/i);

    expect(modal).toBeInTheDocument();
    expect(modal.parentElement).toHaveClass(
      'ReactModal__Overlay ReactModal__Overlay--after-open',
    );
    expect(modal.parentElement?.parentElement).toHaveClass('ReactModalPortal');

    expect(container.firstChild).toMatchSnapshot();
  });
});
