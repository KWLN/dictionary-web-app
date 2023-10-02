import type { Meta, StoryObj } from '@storybook/react';

import { FontPicker } from './FontPicker';

const meta: Meta<typeof FontPicker> = {
  component: FontPicker,
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

type Story = StoryObj<typeof FontPicker>;

export const Default: Story = {};
