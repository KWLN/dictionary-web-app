import type { Meta, StoryObj } from '@storybook/react';

import { DictionaryResult } from './DictionaryResult';

const meta: Meta<typeof DictionaryResult> = {
  component: DictionaryResult,
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

type Story = StoryObj<typeof DictionaryResult>;

// TODO: Success
export const Default: Story = {
  args: {},
};

// TODO: Loading

// TODO: No results

// TODO: Error
