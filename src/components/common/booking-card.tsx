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
          backgroundColor: '#E93E7F', // Pink color from image
        };
      case 'preferred':
        return {
          backgroundColor: '#4A8CD7', // Blue color from image
        };
      case 'category':
        return {
          backgroundColor: '#333333', // Dark gray color from image
        };
      case 'online':
        return {
          backgroundColor: '#4CAF50', // Green color for online tags
        };
      default:
        return {
          backgroundColor: '#333333',
        };
    }
  };

  // Separate tags by type for layout
  const lastMinuteTag = tags.find(tag => tag.color === 'lastMinute');
  const preferredTag = tags.find(tag => tag.color === 'preferred');
  const onlineTag = tags.find(tag => tag.color === 'online');
  const categoryTags = tags.filter(tag => tag.color === 'category');

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        theme.globalStyles.card,
        {
          marginBottom: theme.spacing['16'],
          padding: theme.spacing['16'],
        }
      ]}
    >
      {/* Tags section */}
      <View style={[theme.globalStyles.directionColumn, { marginBottom: theme.spacing['12'] }]}>
        {/* LAST MINUTE - Full width */}
        {lastMinuteTag && (
          <View
            style={[
              theme.globalStyles.horizontalCenter,
              {
                paddingHorizontal: theme.spacing['16'],
                paddingVertical: theme.spacing['4'],
                borderRadius: theme.borderRadius['20'],
                marginBottom: theme.spacing['6'],
                ...theme.globalStyles.widthFull,
                ...getTagStyle(lastMinuteTag.color),
              }
            ]}
          >
            <Text style={[theme.textVariants.body10Semi, theme.textVariants.whiteText]}>
              {lastMinuteTag.label.toUpperCase()}
            </Text>
          </View>
        )}

        {/* PREFERRED - Full width */}
        {preferredTag && (
          <View
            style={[
              theme.globalStyles.horizontalCenter,
              {
                paddingHorizontal: theme.spacing['16'],
                paddingVertical: theme.spacing['4'],
                borderRadius: theme.borderRadius['20'],
                marginBottom: theme.spacing['6'],
                ...theme.globalStyles.widthFull,
                ...getTagStyle(preferredTag.color),
              }
            ]}
          >
            <Text style={[theme.textVariants.body10Semi, theme.textVariants.whiteText]}>
              {preferredTag.label.toUpperCase()}
            </Text>
          </View>
        )}

        {/* ONLINE - Full width */}
        {onlineTag && (
          <View
            style={[
              theme.globalStyles.horizontalCenter,
              {
                paddingHorizontal: theme.spacing['16'],
                paddingVertical: theme.spacing['4'],
                borderRadius: theme.borderRadius['20'],
                marginBottom: theme.spacing['6'],
                ...theme.globalStyles.widthFull,
                ...getTagStyle(onlineTag.color),
              }
            ]}
          >
            <Text style={[theme.textVariants.body10Semi, theme.textVariants.whiteText]}>
              {onlineTag.label.toUpperCase()}
            </Text>
          </View>
        )}

        {/* Category tags - Different layout based on count */}
        {categoryTags.length > 0 && (
          <View style={[
            theme.globalStyles.directionRow, 
            categoryTags.length === 1 
              ? theme.globalStyles.justifyEnd 
              : { gap: theme.spacing['8'] }
          ]}>
            {categoryTags.map((tag, index) => (
              <View
                key={index}
                style={[
                  theme.globalStyles.horizontalCenter,
                  {
                    paddingHorizontal: theme.spacing['16'],
                    paddingVertical: theme.spacing['4'],
                    borderRadius: theme.borderRadius['20'],
                    // Only apply flex: 1 if there are multiple category tags
                    ...(categoryTags.length > 1 && { flex: 1 }),
                    ...getTagStyle(tag.color),
                  }
                ]}
              >
                <Text style={[theme.textVariants.body10Semi, theme.textVariants.whiteText]}>
                  {tag.label.toUpperCase()}
                </Text>
              </View>
            ))}
          </View>
        )}
      </View>

      {/* Date, time and price row */}
      <View style={[theme.globalStyles.directionRow, theme.globalStyles.justifyBetween, theme.globalStyles.alignCenter, { marginBottom: theme.spacing['8'] }]}>
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
