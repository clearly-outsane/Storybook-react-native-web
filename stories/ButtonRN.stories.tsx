import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ButtonRN} from './ButtonRN';

export default {
  title: 'components/ButtonRN',
  component: ButtonRN,
} as ComponentMeta<typeof ButtonRN>;

export const Basic: ComponentStory<typeof ButtonRN> = args => (
  <ButtonRN {...args} />
);

Basic.args = {
  text: 'Hello World',
  color: 'purple',
};
