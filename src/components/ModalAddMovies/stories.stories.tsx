import { Story, Meta } from '@storybook/react/types-6-0';

import ModalAddMovies, { ModalAddMoviesProps } from '.';

export default {
  title: 'ModalAddMovies',
  component: ModalAddMovies,
  args: {
    isOpen: true,
  },
} as Meta;

export const Default: Story<ModalAddMoviesProps> = (args) => (
  <ModalAddMovies {...args} />
);
