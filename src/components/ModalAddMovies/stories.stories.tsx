import { Story, Meta } from '@storybook/react/types-6-0';

import ModalAddMovies from '.';

export default {
  title: 'ModalAddMovies',
  component: ModalAddMovies,
} as Meta;

export const Default: Story = (args) => <ModalAddMovies {...args} />;
