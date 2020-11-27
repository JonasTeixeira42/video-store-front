import { Story, Meta } from '@storybook/react/types-6-0';

import MovieCard from '.';

export default {
title: 'MovieCard',
component: MovieCard,
} as Meta;

export const Default: Story = (args) =>
<MovieCard />;
