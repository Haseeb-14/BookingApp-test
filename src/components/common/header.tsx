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
  onBackPress,
  showBackButton = false,
  showActionButtons = true,
  // New props for booking detail layout
  currentTime,
  dateTime,
  countdown,
  bookingNumber,
  status,
  statusType = 'open',
  showBookingDetailLayout = false,
}: THeaderProps) => {
  const SearchIcon = icons.SearchIcon;
  const CalendarIcon = icons.CalendarIcon;
  
  // Get status button styling based on status type
  const getStatusButtonStyle = (statusType: string) => {
    switch (statusType.toLowerCase()) {
      case 'lastminute':
      case 'last_minute':
        return {
          backgroundColor: '#E93E7F', // Pink color for last minute
        };
      case 'open':
      default:
        return {
          backgroundColor: theme.colors.primary, // Green color for open
        };
    }
  };
  
  // If showing booking detail layout
  if (showBookingDetailLayout) {
    return (
      <View style={[theme.globalStyles.paddingHeaderComponent]}>
        {/* Current Time */}
        {currentTime && (
          <Text style={[theme.textVariants.body14, theme.textVariants.lightText, { marginBottom: theme.spacing['16'] }]}>
            {currentTime}
          </Text>
        )}

        {/* Back Button and Booking Info */}
        <View style={[theme.globalStyles.directionRow, theme.globalStyles.alignCenter, { marginBottom: theme.spacing['16'] }]}>
          {showBackButton && (
            <TouchableOpacity onPress={onBackPress} style={{ marginRight: theme.spacing['12'] }}>
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
          <View style={[theme.globalStyles.flex1]}>
            <Text style={[theme.textVariants.body16Bold, theme.textVariants.text]}>
              {dateTime} - {countdown}
            </Text>
            <Text style={[theme.textVariants.body14, theme.textVariants.lightText]}>
              {bookingNumber}
            </Text>
          </View>
        </View>

        {/* Full Width Status Button */}
        {status && (
          <View style={[
            {
              paddingVertical: theme.spacing['12'],
              paddingHorizontal: theme.spacing['16'],
              borderRadius: theme.borderRadius['12'],
              ...theme.globalStyles.horizontalCenter,
              ...theme.globalStyles.widthFull,
            },
            getStatusButtonStyle(statusType)
          ]}>
            <Text style={[theme.textVariants.body16Bold, { color: 'white' }]}>
              {status.toUpperCase()}
            </Text>
          </View>
        )}
      </View>
    );
  }
  
  // Original header layout
  return (
    <View style={[theme.globalStyles.paddingHeaderComponent]}>
      <View style={[theme.globalStyles.directionRow, theme.globalStyles.justifyBetween, theme.globalStyles.alignCenter]}>
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
        
        {showActionButtons && (
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
        )}
      </View>

      {/* Filter buttons */}
      {filterButtons && filterButtons.length > 0 && (
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
      )}
    </View>
  );
};
