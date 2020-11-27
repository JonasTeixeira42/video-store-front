import { Story, Meta } from '@storybook/react/types-6-0';
import { AddBox } from '@styled-icons/material-outlined/';
import TextField from 'components/TextField';

import Form, { FormProps } from '.';

export default {
  title: 'Form',
  component: Form,
  args: {
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
    <Form {...args}>
      <TextField label="email" placeholder="email" name="email" />
      <TextField label="password" placeholder="password" name="password" />
    </Form>
  </div>
);
