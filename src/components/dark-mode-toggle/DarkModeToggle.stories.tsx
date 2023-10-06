import type { Meta, StoryObj } from '@storybook/react';

import { DarkModeToggle } from './DarkModeToggle';

const meta: Meta<typeof DarkModeToggle> = {
  component: DarkModeToggle,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '800px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof DarkModeToggle>;

export const Default: Story = {};
