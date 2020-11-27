import { screen } from '@testing-library/react';
import { AddBox } from '@styled-icons/material-outlined/';

import Form from '.';
import TextField from 'components/TextField';
import { renderWithTheme } from 'utils/tests/helpers';

describe('<Form />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(
      <Form buttonLabel="Cadastrar" buttonIcon={<AddBox size={24} />}>
        <TextField label="email" placeholder="email" name="email" />
        <TextField label="password" placeholder="password" name="password" />
      </Form>,
    );

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /cadastrar/i }),
    ).toBeInTheDocument();

    expect(container.parentElement).toMatchSnapshot();
  });
});
