import { Story, Meta } from '@storybook/react/types-6-0';

import Modal, { ModalProps } from '.';

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    children: {
      type: 'string',
    },
    isOpen: {
      type: 'boolean',
    },
  },
  args: {
    isOpen: true,
    children: 'Modal',
  },
} as Meta;

export const Default: Story<ModalProps> = (args) => <Modal {...args} />;
