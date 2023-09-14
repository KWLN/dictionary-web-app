import type { Meta, StoryObj } from '@storybook/react';

import { Search } from './Search';

const meta: Meta<typeof Search> = {
  component: Search,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: {},
};

export const Errored: Story = {
  args: {},
};
