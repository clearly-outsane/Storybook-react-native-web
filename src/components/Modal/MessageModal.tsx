import * as React from 'react';
import {View, ViewStyle, StyleSheet, StyleProp, Platform} from 'react-native';
import DefaultTheme from '../../styles/DefaultTheme';
import Text from '../Typography/Text';
import type {Theme} from '../../types';
import Modal from './Modal';
import {colors} from '../../styles/tokens';
import {withTheme} from '../../core/theming';
import IconButton from '../IconButton/IconButton';
import Button from '../Button';

type Props = React.ComponentPropsWithRef<typeof View> & {
  /**
   * Content of the `Modal`.
   */
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  /**
   * Determines whether clicking outside the dialog dismiss it.
   */
  dismissable?: boolean;
  /**
   * Callback that is called when the user dismisses the dialog.
   */
  onDismiss?: () => void;
  /**
   * Determines Whether the dialog is visible.
   */
  visible: boolean;
  /**
   * The title of the modal
   */
  title: string;
  /**
   * @optional
   */
  theme: Theme;
};

const MessageModal = ({
  children,
  dismissable = true,
  onDismiss,
  visible = false,
  style,
  title,
  theme,
}: Props) => (
  <Modal
    dismissable={dismissable}
    onDismiss={onDismiss}
    visible={visible}
    contentContainerStyle={[
      {
        borderRadius: 24,
        backgroundColor: colors.white,
      },
      styles.container,
      style,
    ]}
  >
    <View style={{flexDirection: 'column'}}>
      <View style={[styles.modalHeader]}>
        <Text
          style={[
            {...theme.fonts.bold},
            Platform.OS === 'web' && {fontFamily: 'Inter'},
          ]}
          variant="Body"
        >
          {title}
        </Text>
        <IconButton
          icon="close"
          iconColor={colors.black}
          size={20}
          onPress={() => console.log('Pressed')}
        />
      </View>
      <View style={[styles.innerContainer, style]}>{children}</View>
      <View style={[styles.footer]}>
        <Button onPress={() => {}}> Close modal</Button>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    /**
     * This prevents the shadow from being clipped on Android since Android
     * doesn't support `overflow: visible`.
     * One downside for this fix is that it will disable clicks on the area
     * of the shadow around the dialog, consequently, if you click around the
     * dialog (44 pixel from the top and bottom) it won't be dismissed.
     */
    marginVertical: Platform.OS === 'android' ? 44 : 0,
    marginHorizontal: 26,
    elevation: 24,
    justifyContent: 'flex-start',
    padding: 24,
    width: 420,
  },
  innerContainer: {},
  modalHeader: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingBottom: 16,
  },
  footer: {paddingVertical: 16},
});

export default withTheme(MessageModal);
