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

export const Loading: Story = {
  args: { resultData: undefined, isLoading: true, error: undefined },
};

export const EmptyState: Story = {
  args: { resultData: undefined, isLoading: false, error: undefined },
};

export const ErrorState: Story = {
  args: { resultData: undefined, isLoading: false, error: Error('Something went wrong') },
};
