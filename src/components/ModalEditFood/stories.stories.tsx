import { Story, Meta } from '@storybook/react/types-6-0';

import ModalEditFood, { ModalEditFoodProps } from '.';

import movie from './mock';

export default {
  title: 'ModalEditFood',
  component: ModalEditFood,
  args: {
    movie,
    isOpen: true,
  },
} as Meta;

export const Default: Story<ModalEditFoodProps> = (args) => (
  <ModalEditFood {...args} />
);
