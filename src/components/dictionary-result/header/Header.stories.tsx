import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';
import { MOCK_RESULT_ENTRY } from '../../../services/dictionary-api/mocks';

const meta: Meta<typeof Header> = {
  component: Header,
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

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    phonetic: MOCK_RESULT_ENTRY.phonetic,
    phonetics: MOCK_RESULT_ENTRY.phonetics,
    word: MOCK_RESULT_ENTRY.word,
  },
};
