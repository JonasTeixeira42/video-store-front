import { render, screen } from '@testing-library/react';

import MovieCard from '.';

describe('<MovieCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<MovieCard />);

    expect(screen.getByRole('heading', { name: /MovieCard/i }))
    .toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
