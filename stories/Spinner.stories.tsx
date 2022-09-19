import {ComponentStory} from '@storybook/react';
import React from 'react';
import {View} from 'react-native';
import {DefaultTheme} from '../src';
import Button from '../src/components/Button';
import Spinner from '../src/components/Spinner/Spinner';
import {colors} from '../src/styles/tokens';

export default {
  title: 'Components/Spinner',
  component: Spinner,

  argTypes: {},
};

// Other Avatar stories

/*
 * New story using Controls
 * Read more about Storybook templates at:
 * https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Spinner> = args => <Spinner {...args} />;

export const Default = Template.bind({});
/*
 * More on args at:
 * https://storybook.js.org/docs/react/writing-stories/args
 */
Default.args = {
  size: 24,
};
