import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {withTheme} from '../../src/index';
import Text from '../../src/components/Typography/Text';

class Welcome extends React.Component {
  styles = {
    wrapper: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
    },
    header: {
      fontSize: 18,
      marginBottom: 18,
    },
    content: {
      fontSize: 12,
      marginBottom: 10,
      lineHeight: 18,
    },
  };

  render() {
    return (
      <View style={this.styles.wrapper}>
        <Text
          style={{
            ...this.styles.header,
            color: this.props.theme.colors.primary.default,
            fontFamily: 'Inter',
          }}
        >
          Using the Theme Provider
        </Text>
        <Text style={this.styles.content}>
          This is a UI Component development environment for your React Native
          app. Here you can display and interact with your UI components as
          stories. A story is a single state of one or more UI components. You
          can have as many stories as you want. In other words a story is like a
          visual test case.
        </Text>
        <Text style={this.styles.content}>
          There are already some stories inside the "storybook/stories"
          directory. Try editing the "storybook/stories/Welcome.js" file to edit
          this message.
        </Text>
      </View>
    );
  }
}

export default withTheme(Welcome);
