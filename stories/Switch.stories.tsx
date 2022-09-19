import {useArgs} from '@storybook/client-api';
import {ComponentStory} from '@storybook/react';
import React from 'react';
import {View} from 'react-native';
import {DefaultTheme} from '../src';
import Button from '../src/components/Button';
import RadioButton from '../src/components/Radio';
import Switch from '../src/components/Switch/Switch';
import Text from '../src/components/Text';
import {colors} from '../src/styles/tokens';

export default {
  title: 'Components/Switch',
  component: Switch,

  argTypes: {
    onValueChange: {
      action: 'clicked',
    },
  },
};

/*
 * New story using Controls
 * Read more about Storybook templates at:
 * https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Switch> = args => {
  const [{value: valueArg}, updateArgs] = useArgs();
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  React.useEffect(() => {
    setIsSwitchOn(valueArg);
  }, [valueArg]);

  const onToggleSwitch = () => {
    updateArgs({value: !isSwitchOn});
    setIsSwitchOn(!isSwitchOn);
  };
  return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
};

export const Default = Template.bind({});
/*
 * More on args at:
 * https://storybook.js.org/docs/react/writing-stories/args
 */
Default.args = {value: true};
