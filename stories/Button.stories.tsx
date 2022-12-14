import {ComponentStory} from '@storybook/react';
import React from 'react';
import {View} from 'react-native';
import {DefaultTheme} from '../src';
import Button from '../src/components/Button';
import {colors} from '../src/styles/tokens';

export default {
  title: 'Components/Button',
  component: Button,

  argTypes: {
    mode: {
      control: {
        type: 'select',
      },
      options: ['contained', 'outlined'],
    },
    onClick: {
      action: 'clicked',
    },
    color: {
      control: {
        type: 'color',
        presetColors: [
          {color: DefaultTheme.colors.primary.default, title: 'primary'},
          {color: DefaultTheme.colors.secondary.default, title: 'secondary'},
          {color: DefaultTheme.colors.success.default, title: 'success'},
          {color: DefaultTheme.colors.warning.default, title: 'warning'},
          {color: DefaultTheme.colors.error.default, title: 'error'},
          {color: DefaultTheme.colors.info.default, title: 'info'},
          {color: colors.gray400, title: 'gray'},
          {color: colors.black, title: 'black'},
        ],
      },
    },
  },
};

// Other Avatar stories

/*
 * New story using Controls
 * Read more about Storybook templates at:
 * https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Button> = args => (
  <View style={{alignItems: 'start'}}>
    <Button {...args}> {args.text}</Button>
  </View>
);

export const Large = Template.bind({});
/*
 * More on args at:
 * https://storybook.js.org/docs/react/writing-stories/args
 */
Large.args = {
  loading: false,
  mode: 'contained',
  text: 'Click me',
  labelStyle: {fontFamily: 'Inter'},
  disabled: false,
};
