import { Story, Meta } from '@storybook/react/types-6-0';

import MovieCard, { MovieCardProps } from '.';

import movie from './mock';

export default {
  title: 'MovieCard',
  component: MovieCard,
  args: {
    movie,
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export const Default: Story<MovieCardProps> = (args) => <MovieCard {...args} />;
