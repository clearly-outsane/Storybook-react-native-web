import {useArgs} from '@storybook/client-api';
import {ComponentStory} from '@storybook/react';
import React from 'react';
import {View} from 'react-native';
import {Provider as ThemeProvider, useTheme} from '../src';
import Button from '../src/components/Button';
import SegmentedController from '../src/components/SegmentedController/SegmentedController';
import Text from '../src/components/Text';
import {colors} from '../src/styles/tokens';

export default {
  title: 'Components/SegmentedController',
  component: SegmentedController,

  argTypes: {
    mode: {
      control: {
        type: 'select',
      },
      options: ['default', 'line'],
    },
  },
};

/*
 * New story using Controls
 * Read more about Storybook templates at:
 * https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof SegmentedController> = args => {
  const [{}, updateArgs] = useArgs();
  return (
    <ThemeProvider>
      <Text>
        Masked view doesn't work on Web, unless I make a different component
        entirely
      </Text>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
/*
 * More on args at:
 * https://storybook.js.org/docs/react/writing-stories/args
 */
Default.args = {mode: 'default'};
