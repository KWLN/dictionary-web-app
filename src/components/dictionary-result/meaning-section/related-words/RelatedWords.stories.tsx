import type { Meta, StoryObj } from '@storybook/react';

import { RelatedWords } from './RelatedWords';
import { MOCK_MEANING_NOUN } from '../../../../services/dictionary-api/mocks';

const meta: Meta<typeof RelatedWords> = {
  component: RelatedWords,
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

type Story = StoryObj<typeof RelatedWords>;

export const Default: Story = {
  args: { heading: 'Synonyms', words: MOCK_MEANING_NOUN.synonyms },
};
