---
to: "<%= require_storybook ? `components/${atomic}/${h.changeCase.pascal(component_name)}/index.stories.tsx` : null %>"
---

import React from 'react';
import { Story, Meta } from '@storybook/react';

import { <%= h.changeCase.pascal(component_name) %>, <%= h.changeCase.pascal(component_name) %>Props } from './index';

export default {
  title: 'components/<%= atomic %>/<%= h.changeCase.pascal(component_name) %>',
  component: <%= h.changeCase.pascal(component_name) %>,
} as Meta;

const Template: Story<<%= h.changeCase.pascal(component_name) %>Props> = (args) => <<%= h.changeCase.pascal(component_name) %> {...args} />;

export const Default = Template.bind({});
Default.args = {};