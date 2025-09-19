import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from './text';
import { Container } from './container';
import { theme } from '@styles/theme';
import { icons } from '@styles/icons';
import { THeaderProps } from '@types';

export const Header = ({
  title,
  filterButtons,
  onFilterPress,
  onCalendarPress,
}: THeaderProps) => {
  const SearchIcon = icons.SearchIcon;
  const CalendarIcon = icons.CalendarIcon;
  
  return (
    <View style={[theme.globalStyles.paddingHeaderComponent]}>
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
            <SearchIcon stroke={theme.colors.white} />
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={onCalendarPress}
            style={[
              theme.globalStyles.horizontalCenter,
              {
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: theme.colors.inactive,
                borderWidth: 1,
                borderColor: theme.colors.border,
              }
            ]}
          >
            <CalendarIcon stroke={theme.colors.text} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Filter buttons */}
      <View style={[theme.globalStyles.directionRow, theme.globalStyles.gap12, { marginTop: theme.spacing['16'] }]}>
        {filterButtons.map((button, index) => (
          <TouchableOpacity
            key={index}
            onPress={button.onPress}
            style={[
              theme.globalStyles.horizontalCenter,
              theme.globalStyles.padding24H,
              theme.globalStyles.padding8V,
              theme.globalStyles.borderRadius20,
              {
                backgroundColor: button.isActive ? theme.colors.primary : theme.colors.inactive,
              }
            ]}
          >
            <Text
              style={[
                theme.textVariants.body14Medium,
                button.isActive ? theme.textVariants.whiteText : theme.textVariants.inactiveText,
              ]}
            >
              {button.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
