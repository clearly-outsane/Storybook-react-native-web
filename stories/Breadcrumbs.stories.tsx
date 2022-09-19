import {ComponentStory} from '@storybook/react';
import React from 'react';
import {View} from 'react-native';
import {DefaultTheme} from '../src';
import Breadcrumbs from '../src/components/Breadcrumbs/Breadcrumbs';
import {colors} from '../src/styles/tokens';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
};

// Other Avatar stories

/*
 * New story using Controls
 * Read more about Storybook templates at:
 * https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Breadcrumbs> = args => (
  <Breadcrumbs {...args} />
);

export const Default = Template.bind({});
/*
 * More on args at:
 * https://storybook.js.org/docs/react/writing-stories/args
 */
Default.args = {
  breadcrumbs: [
    {label: 'Hello', href: '#'},
    {label: 'World'},
    {label: 'Breadcrumb'},
  ],
};
