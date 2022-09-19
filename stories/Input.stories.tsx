import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {KeyboardAvoidingView, Platform} from 'react-native';
import TextInput from '../src/components/Input/TextInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/TextInput',
  component: TextInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['text', 'text-area', 'stripe-card'],
    },
  },
} as ComponentMeta<typeof TextInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextInput> = args => (
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{width: '100%', padding: 16, flex: 1, alignItems: 'flex-start'}}
  >
    <TextInput {...args} />
  </KeyboardAvoidingView>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {label: 'Full Name'};

export const TextArea = Template.bind({});
TextArea.args = {
  label: 'Textarea Input',
  multiline: true,
  numberOfLines: 7,
};

export const Stripe = Template.bind({});
Stripe.args = {label: 'Credit Card details', type: 'stripe-card'};
