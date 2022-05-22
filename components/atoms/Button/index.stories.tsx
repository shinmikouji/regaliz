import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './index';

export default {
  title: 'components/atoms/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};