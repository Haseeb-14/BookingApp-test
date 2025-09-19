import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from './text';
import { Container } from './container';
import { theme } from '@styles/theme';
import { THeaderProps } from '@types';

export const Header = ({
  title,
  filterButtons,
  onFilterPress,
  onCalendarPress,
}: THeaderProps) => {
  return (
    <Container style={[theme.globalStyles.paddingHeaderComponent]}>
      {/* Top row with title and action buttons */}
      <View style={[theme.globalStyles.directionRow, theme.globalStyles.justifyBetween, theme.globalStyles.alignCenter]}>
        <Text style={[theme.textVariants.h20Bold, theme.textVariants.text]}>
          {title}
        </Text>
        
        <View style={[theme.globalStyles.directionRow, theme.globalStyles.gap12]}>
          <TouchableOpacity
            onPress={onFilterPress}
            style={[
              theme.globalStyles.horizontalCenter,
              {
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: theme.colors.primary,
              }
            ]}
          >
            <Text style={[theme.textVariants.body14, theme.textVariants.whiteText]}>
              🔍
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={onCalendarPress}
            style={[
              theme.globalStyles.horizontalCenter,
              {
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: theme.colors.white,
                borderWidth: 1,
                borderColor: theme.colors.border,
              }
            ]}
          >
            <Text style={[theme.textVariants.body14, theme.textVariants.text]}>
              📅
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Filter buttons */}
      <View style={[theme.globalStyles.directionRow, theme.globalStyles.gap12, { marginTop: 16 }]}>
        {filterButtons.map((button, index) => (
          <TouchableOpacity
            key={index}
            onPress={button.onPress}
            style={[
              theme.globalStyles.horizontalCenter,
              {
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 20,
                backgroundColor: button.isActive ? theme.colors.primary : theme.colors.inactive,
              }
            ]}
          >
            <Text
              style={[
                theme.textVariants.body12Medium,
                button.isActive ? theme.textVariants.whiteText : theme.textVariants.inactiveText,
              ]}
            >
              {button.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </Container>
  );
};
