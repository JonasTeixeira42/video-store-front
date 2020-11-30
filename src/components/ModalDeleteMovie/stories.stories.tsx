import { Story, Meta } from '@storybook/react/types-6-0';

import ModalDeleteMovie, { ModalDeleteMoviesProps } from '.';

export default {
  title: 'ModalDeleteMovie',
  component: ModalDeleteMovie,
  args: {
    movie: {
      id: '1',
      name: 'Star Wars',
    },
    isOpen: true,
  },
} as Meta;

export const Default: Story<ModalDeleteMoviesProps> = (args) => (
  <ModalDeleteMovie {...args} />
);
