import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from './text';
import { theme } from '@styles/theme';
import { TBookingCardProps, TTag } from '@types';

export const BookingCard = ({
  date,
  time,
  day,
  price,
  fromAddress,
  toAddress,
  tags,
  onPress,
}: TBookingCardProps) => {
  const getTagStyle = (color: TTag['color']) => {
    switch (color) {
      case 'lastMinute':
        return {
          backgroundColor: theme.colors.lastMinute,
        };
      case 'preferred':
        return {
          backgroundColor: theme.colors.preferred,
        };
      case 'category':
        return {
          backgroundColor: theme.colors.category,
        };
      default:
        return {
          backgroundColor: theme.colors.category,
        };
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        theme.globalStyles.card,
        {
          marginBottom: 16,
          padding: 16,
        }
      ]}
    >
      {/* Tags row */}
      <View style={[theme.globalStyles.directionRow, theme.globalStyles.flexWrap, theme.globalStyles.gap8, { marginBottom: 12 }]}>
        {tags.map((tag, index) => (
          <View
            key={index}
            style={[
              theme.globalStyles.horizontalCenter,
              {
                paddingHorizontal: 12,
                paddingVertical: 4,
                borderRadius: 12,
                ...getTagStyle(tag.color),
              }
            ]}
          >
            <Text style={[theme.textVariants.body10Medium, theme.textVariants.whiteText]}>
              {tag.label}
            </Text>
          </View>
        ))}
      </View>

      {/* Date, time and price row */}
      <View style={[theme.globalStyles.directionRow, theme.globalStyles.justifyBetween, theme.globalStyles.alignCenter, { marginBottom: 8 }]}>
        <Text style={[theme.textVariants.body16Medium, theme.textVariants.text]}>
          {date}, {time} ({day})
        </Text>
        <Text style={[theme.textVariants.body16Bold, theme.textVariants.text]}>
          {price}
        </Text>
      </View>

      {/* Addresses */}
      <View style={[theme.globalStyles.directionColumn, theme.globalStyles.gap4]}>
        <Text style={[theme.textVariants.body14, theme.textVariants.lightText]}>
          From: {fromAddress}
        </Text>
        <Text style={[theme.textVariants.body14, theme.textVariants.lightText]}>
          To: {toAddress}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
