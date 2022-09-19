import {ComponentStory} from '@storybook/react';
import React from 'react';
import {View} from 'react-native';
import {DefaultTheme} from '../src';
import Breadcrumbs from '../src/components/Breadcrumbs/Breadcrumbs';
import Checkbox from '../src/components/Checkbox/Checkbox';
import {colors} from '../src/styles/tokens';
import {useArgs} from '@storybook/client-api';
import Chip from '../src/components/Chip/Chip';

export default {
  title: 'Components/Chip',
  component: Chip,
  argTypes: {
    mode: {
      control: {
        type: 'select',
      },
      options: ['flat', 'outlined'],
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

/*
 * New story using Controls
 * Read more about Storybook templates at:
 * https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Breadcrumbs> = args => (
  <View style={{alignItems: 'start'}}>
    <Chip textStyle={{fontFamily: 'Inter', fontWeight: 700}} {...args}>
      {args.text}
    </Chip>
  </View>
);

export const Default = Template.bind({});
/*
 * More on args at:
 * https://storybook.js.org/docs/react/writing-stories/args
 */
Default.args = {
  mode: 'flat',
  text: 'Primary',
};
