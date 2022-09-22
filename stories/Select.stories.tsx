import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Platform, View} from 'react-native';

import {DefaultTheme, Provider as ThemeProvider, useTheme} from '../src';
import Modal from '../src/components/Modal/Modal';
import Portal from '../src/components/Portal/Portal';
import MessageModal from '../src/components/Modal/MessageModal';
import Text from '../src/components/Text';
import Button from '../src/components/Button';
import Select from '../src/components/Select';
import Menu from '../src/components/Menu/Menu';
import Divider from '../src/components/Divider/Divider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Select',
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Select>;

const data = [
  {label: 'One', value: '1', description: 'This is some description'},
  {label: 'Two', value: '2', description: 'More description'},
  {label: 'Three', value: '3'},
  {label: 'Four', value: '4'},
  {label: 'Five', value: '5'},
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = args => {
  const [selected, setSelected] = React.useState(undefined);

  return (
    <ThemeProvider>
      <View
        style={{
          backgroundColor: DefaultTheme.colors.bg.canvas,

          padding: 16,
        }}
      >
        <View
          style={{
            width: '100%',
            maxWidth: 420,
          }}
        >
          <Select
            data={data}
            label={'Select Item'}
            onSelect={setSelected}
            selected={selected}
          />
        </View>
      </View>
    </ThemeProvider>
  );
};
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
