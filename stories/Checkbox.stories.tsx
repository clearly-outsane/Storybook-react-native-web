import {ComponentStory} from '@storybook/react';
import React from 'react';
import {View} from 'react-native';
import {DefaultTheme} from '../src';
import Breadcrumbs from '../src/components/Breadcrumbs/Breadcrumbs';
import Checkbox from '../src/components/Checkbox/Checkbox';
import {colors} from '../src/styles/tokens';
import {useArgs} from '@storybook/client-api';
import {action} from '@storybook/addon-actions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    status: {
      control: {
        type: 'select',
      },
      options: ['checked', 'unchecked'],
    },
    onPress: {
      action: 'clicked',
    },
  },
};

/*
 * New story using Controls
 * Read more about Storybook templates at:
 * https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Breadcrumbs> = args => {
  const [checked, setChecked] = React.useState(false);
  const [{status}, updateArgs] = useArgs();

  React.useEffect(() => {
    updateArgs({status: checked ? 'checked' : 'unchecked'});
  }, [checked]);

  return (
    <>
      <Checkbox
        {...args}
        onPress={e => {
          action('click')(e);
          setChecked(!checked);
        }}
        status={checked ? 'checked' : 'unchecked'}
      />
    </>
  );
};

export const Default = Template.bind({});
/*
 * More on args at:
 * https://storybook.js.org/docs/react/writing-stories/args
 */
Default.args = {
  status: 'unchecked',
};
