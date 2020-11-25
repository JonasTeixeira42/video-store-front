import { Story, Meta } from '@storybook/react/types-6-0';
import { AddBox } from '@styled-icons/material-outlined/';

import Button, { ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    icon: {
      type: '',
    },
  },
} as Meta;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;

Default.args = {
  children: 'Add Movies',
  icon: <AddBox size={24} />,
};

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />;

WithIcon.args = {
  size: 'small',
  icon: <AddBox size={24} />,
};
