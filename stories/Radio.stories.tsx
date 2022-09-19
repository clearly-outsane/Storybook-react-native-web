import {useArgs} from '@storybook/client-api';
import {ComponentStory} from '@storybook/react';
import React from 'react';
import {View} from 'react-native';
import {DefaultTheme} from '../src';
import Button from '../src/components/Button';
import RadioButton from '../src/components/Radio';
import Text from '../src/components/Text';
import {colors} from '../src/styles/tokens';

export default {
  title: 'Components/Radio',
  component: RadioButton,

  argTypes: {
    onValueChange: {
      action: 'clicked',
    },
    value: {
      control: {
        type: 'select',
      },
      options: ['first', 'second'],
    },
  },
};

const RadioGroupExample = ({valueArg, updateArgs}) => {
  const [value, setValue] = React.useState('first');

  React.useEffect(() => {
    setValue(valueArg);
    return () => {};
  }, [valueArg]);

  return (
    <RadioButton.Group
      onValueChange={newValue => {
        updateArgs({value: newValue});
        setValue(newValue);
      }}
      value={value}
    >
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <RadioButton value="first" />
        <Text>First</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <RadioButton value="second" />
        <Text>Second</Text>
      </View>
    </RadioButton.Group>
  );
};

/*
 * New story using Controls
 * Read more about Storybook templates at:
 * https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof RadioButton> = args => {
  const [{value: valueArg}, updateArgs] = useArgs();
  return (
    <RadioGroupExample {...args} valueArg={valueArg} updateArgs={updateArgs} />
  );
};

export const Default = Template.bind({});
/*
 * More on args at:
 * https://storybook.js.org/docs/react/writing-stories/args
 */
Default.args = {value: 'first'};
