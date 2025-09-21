import React from 'react';
import { View } from 'react-native';
import { Text } from './text';
import { theme } from '@styles/theme';
import { TInstructionMessageProps } from '@types';

export const InstructionMessage = ({ 
  message, 
  backgroundColor = '#F0FAF6', 
}: TInstructionMessageProps) => {
  return (
    <View style={{
      backgroundColor,
      padding: theme.spacing['16'],
      borderRadius: theme.borderRadius['12'],
      marginBottom: theme.spacing['24']
    }}>
      <Text style={[theme.textVariants.body16Bold]}>
        {message}
      </Text>
    </View>
  );
};
