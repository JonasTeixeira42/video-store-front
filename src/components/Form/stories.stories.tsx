import { Story, Meta } from '@storybook/react/types-6-0';
import { AddBox } from '@styled-icons/material-outlined/';

import Form, { FormProps } from '.';

import inputs from './mocks';

export default {
  title: 'Form',
  component: Form,
  args: {
    inputs,
    buttonLabel: 'Cadastrar',
    buttonIcon: <AddBox size={24} />,
  },
  argTypes: {
    buttonIcon: {
      type: '',
    },
  },
} as Meta;

export const Default: Story<FormProps> = (args) => (
  <div style={{ maxWidth: '42rem', margin: 'auto' }}>
    <Form {...args} />
  </div>
);
