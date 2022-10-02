import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Header, HeaderProps } from './index';

export default {
  title: 'components/organisms/Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};