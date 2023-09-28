import type { Meta, StoryObj } from '@storybook/react';

import { MeaningSection } from './MeaningSection';
import { MOCK_MEANING_NOUN } from '../../../services/dictionary-api/mocks';

const meta: Meta<typeof MeaningSection> = {
  component: MeaningSection,
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

type Story = StoryObj<typeof MeaningSection>;

export const Default: Story = {
  args: { meaning: MOCK_MEANING_NOUN },
};
