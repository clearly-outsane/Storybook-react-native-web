import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Welcome from './Welcome';

export default {
  title: 'Components/Welcome',
  component: Welcome,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Welcome>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Welcome> = args => <Welcome {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
