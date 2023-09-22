import type { Meta, StoryObj } from '@storybook/react';

import { MeaningSection } from './MeaningSection';

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

// TODO: Mock args
export const Default: Story = {
  args: {},
};
