import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer';
import { MOCK_RESULT_ENTRY } from '../../../services/dictionary-api/mocks';

const meta: Meta<typeof Footer> = {
  component: Footer,
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

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    sourceUrls: MOCK_RESULT_ENTRY.sourceUrls,
  },
};
