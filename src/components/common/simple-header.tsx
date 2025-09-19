import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from './text';
import { theme } from '@styles/theme';

type TSimpleHeaderProps = {
  title: string;
  onBackPress?: () => void;
  showBackButton?: boolean;
};

export const SimpleHeader = ({
  title,
  onBackPress,
  showBackButton = true,
}: TSimpleHeaderProps) => {
  return (
    <View style={[theme.globalStyles.paddingHeaderComponent]}>
      <View style={[theme.globalStyles.directionRow, theme.globalStyles.alignCenter]}>
        {showBackButton && (
          <TouchableOpacity 
            onPress={onBackPress} 
            style={{ marginRight: theme.spacing['12'] }}
          >
            <View style={{
              width: 24,
              height: 24,
              borderRadius: 12,
              backgroundColor: theme.colors.primary,
              ...theme.globalStyles.horizontalCenter
            }}>
              <Text style={[theme.textVariants.body14Bold, { color: 'white' }]}>←</Text>
            </View>
          </TouchableOpacity>
        )}
        <Text style={[theme.textVariants.h20Medium, theme.textVariants.text]}>
          {title}
        </Text>
      </View>
    </View>
  );
};
