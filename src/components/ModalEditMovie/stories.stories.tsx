import { Story, Meta } from '@storybook/react/types-6-0';

import ModalEditMovie, { ModalEditMovieProps } from '.';

import movie from './mock';

export default {
  title: 'ModalEditMovie',
  component: ModalEditMovie,
  args: {
    movie,
    isOpen: true,
  },
} as Meta;

export const Default: Story<ModalEditMovieProps> = (args) => (
  <ModalEditMovie {...args} />
);
