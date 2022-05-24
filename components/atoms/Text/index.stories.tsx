import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Text, TextProps } from './index';

export default {
  title: 'components/atoms/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <p>こんにちは</p>
};