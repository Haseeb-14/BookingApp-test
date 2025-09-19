import { useRef } from 'react';
import { ActionSheetRef, ActionSheetProps } from 'react-native-actions-sheet';
import { theme } from '@styles';

export const useActionSheet = (props?: ActionSheetProps) => {
  const defaultProps: ActionSheetProps = {
    isModal: true,
    enableGesturesInScrollView: true,
    headerAlwaysVisible: false,
    closeOnPressBack: true,
    closeOnTouchBackdrop: true,
    safeAreaInsets: {
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
    },
    gestureEnabled: true,
    defaultOverlayOpacity: 0.4,
    indicatorStyle: {
      display: 'none',
    },
    CustomHeaderComponent: null,
    containerStyle: {
      borderTopLeftRadius: theme.borderRadius[12],
      borderTopRightRadius: theme.borderRadius[12],
      overflow: 'hidden',
    },
  };

  const actionSheetRef = useRef<ActionSheetRef | null>(null);

  const showActionSheet = () => {
    actionSheetRef.current?.show();
  };

  const hideActionSheet = () => {
    actionSheetRef.current?.hide();
  };

  const toggleActionSheet = () => {
    const isOpen = actionSheetRef.current?.isOpen();
    if (isOpen) {
      actionSheetRef.current?.hide();
    } else {
      actionSheetRef.current?.show();
    }
  };

  const getActionSheetProps = () => ({
    ref: actionSheetRef,
    ...defaultProps,
    ...props,
  });

  return {
    showActionSheet,
    hideActionSheet,
    toggleActionSheet,
    getActionSheetProps,
  };
};
