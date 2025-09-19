import React from 'react';
import { KeyboardAvoidingView, Platform, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '@styles/theme';

type TContainer = React.PropsWithChildren & {
  style?: ViewStyle | ViewStyle[];
  safe?: boolean;
  safeEdges?: ('top' | 'right' | 'bottom' | 'left')[];
  padding?: boolean;
  keyboardAvoid?: boolean;
  keyboardAvoidBehavior?: 'padding' | 'height' | 'position';
};

export const Container = ({
  safe = false,
  safeEdges,
  padding = false,
  keyboardAvoid = false,
  keyboardAvoidBehavior,
  children,
  style,
}: TContainer) => {
  const renderContent = () => {
    return (
      <SafeAreaView
        edges={safe ? safeEdges || ['top', 'bottom'] : []}
        style={[
          theme.globalStyles.flex1,
          theme.globalStyles.bgWhite,
          padding ? theme.globalStyles.padding36H : undefined,
          style,
        ]}
      >
        {children}
      </SafeAreaView>
    );
  };

  if (keyboardAvoid) {
    return (
      <KeyboardAvoidingView
        style={[theme.globalStyles.flex1]}
        behavior={
          keyboardAvoidBehavior ||
          (Platform.OS === 'ios' ? 'padding' : 'height')
        }
      >
        {renderContent()}
      </KeyboardAvoidingView>
    );
  }

  return renderContent();
};
