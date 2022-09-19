import {useArgs} from '@storybook/client-api';
import {ComponentStory} from '@storybook/react';
import React from 'react';
import {View} from 'react-native';
import {DefaultTheme, Provider as ThemeProvider} from '../src';
import Button from '../src/components/Button';
import RadioButton from '../src/components/Radio';
import Switch from '../src/components/Switch/Switch';
import Text from '../src/components/Text';
import Toast from '../src/components/Toast/Toast';
import {colors} from '../src/styles/tokens';

export default {
  title: 'Components/Toast',
  component: Toast,

  argTypes: {},
};

/*
 * New story using Controls
 * Read more about Storybook templates at:
 * https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Switch> = args => {
  const [{visible: visibleArg}, updateArgs] = useArgs();
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    setVisible(visibleArg);
  }, [visibleArg]);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => {
    updateArgs({visible: false});
    setVisible(false);
  };

  return (
    <View style={{height: '80vh', width: 420, alignItems: 'flex-end'}}>
      <Toast visible={visible} onDismiss={onDismissSnackBar}>
        {args.text}
      </Toast>
    </View>
  );
};

export const Default = Template.bind({});
/*
 * More on args at:
 * https://storybook.js.org/docs/react/writing-stories/args
 */
Default.args = {
  text: 'Your settings were successfully updated!',
  action: {
    label: 'Close',
    onPress: () => {
      // Do something
    },
  },
  visible: true,
  onDismissSnackBar: () => {},
  onDismiss: () => {},
};
