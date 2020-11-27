import { Story, Meta } from '@storybook/react/types-6-0';

import ModalAddDirectors, { ModalAddDirectorsProps } from '.';

export default {
  title: 'ModalAddDirectors',
  component: ModalAddDirectors,
  args: {
    isOpen: true,
  },
} as Meta;

export const Default: Story<ModalAddDirectorsProps> = (args) => (
  <ModalAddDirectors {...args} />
);
