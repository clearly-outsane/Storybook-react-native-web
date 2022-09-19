import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {KeyboardAvoidingView, Platform, View} from 'react-native';
import TextInput from '../src/components/Input/TextInput';
import List from '../src/components/List';
import Icon from 'react-native-vector-icons/Feather';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/List.Item',
  component: List,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TextInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextInput> = args => (
  <View style={{maxWidth: 360}}>
    <List.Item {...args} />
  </View>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {label: 'Label', text: 'John Smith'};

export const Links = Template.bind({});
Links.args = {
  label: 'Label',
  text: 'Some link',
  href: '#',
};

export const RightIcons = Template.bind({});
RightIcons.args = {
  label: 'Label',
  text: 'Some link',
  right: props => <Icon size={18} {...props} name="trash-2" />,
};
