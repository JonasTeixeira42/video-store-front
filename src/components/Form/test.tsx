import { screen } from '@testing-library/react';
import { AddBox } from '@styled-icons/material-outlined/';

import Form from '.';
import { renderWithTheme } from 'utils/tests/helpers';

import inputs from './mocks';

describe('<Form />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(
      <Form
        inputs={inputs}
        buttonLabel="Cadastrar"
        buttonIcon={<AddBox size={24} />}
      />,
    );

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /cadastrar/i }),
    ).toBeInTheDocument();

    expect(container.parentElement).toMatchSnapshot();
  });
});
