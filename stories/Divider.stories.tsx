import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Divider from '../src/components/Divider/Divider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Divider',
  component: Divider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Divider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Divider> = args => <Divider {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Label = Template.bind({});
Label.args = {
  label: 'text in the middle',
};
