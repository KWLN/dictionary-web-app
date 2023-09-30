import type { Meta, StoryObj } from '@storybook/react';

import { DictionaryResult } from './DictionaryResult';
import { MOCK_SUCCESS_RESPONSE } from '../../services/dictionary-api/mocks';

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

export const Default: Story = {
  args: { resultData: MOCK_SUCCESS_RESPONSE, isLoading: false, error: undefined },
};

// TODO: Loading

// TODO: No results

// TODO: Error
