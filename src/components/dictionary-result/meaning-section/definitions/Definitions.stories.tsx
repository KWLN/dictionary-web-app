import type { Meta, StoryObj } from '@storybook/react';

import { Definitions } from './Definitions';
import {
  MOCK_DEFINITION_NOUN,
  MOCK_DEFINITION_NOUN_2,
  MOCK_DEFINITION_NOUN_3,
} from '../../../../services/dictionary-api/mocks';

const meta: Meta<typeof Definitions> = {
  component: Definitions,
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

type Story = StoryObj<typeof Definitions>;

export const Default: Story = {
  args: { definitions: [MOCK_DEFINITION_NOUN, MOCK_DEFINITION_NOUN_2, MOCK_DEFINITION_NOUN_3] },
};
