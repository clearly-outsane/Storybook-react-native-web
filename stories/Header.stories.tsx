import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Divider from '../src/components/Divider/Divider';
import Header from '../src/components/Header/Header';
import HeaderBackIcon from '../src/components/Header/BackIcon';
import HeaderCloseIcon from '../src/components/Header/CloseIcon';
import {action} from '@storybook/addon-actions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Header',
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = args => (
  <Header {...args}>
    <HeaderBackIcon size={24} onPress={action('Back')} />
    <HeaderCloseIcon size={18} onPress={action('Close')} />
  </Header>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Header',
  breadcrumbs: [
    {label: 'Hello', href: '#'},
    {label: 'World'},
    {label: 'Breadcrumb'},
  ],
};
