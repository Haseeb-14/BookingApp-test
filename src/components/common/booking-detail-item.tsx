import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from './text';
import { theme } from '@styles/theme';

type TBookingDetailItemProps = {
  label: string;
  value: string;
  checked: boolean;
  onCheckChange: (checked: boolean) => void;
  isLink?: boolean;
  onLinkPress?: () => void;
  hasIcon?: boolean;
  iconComponent?: React.ReactNode;
};

export const BookingDetailItem = ({ 
  label, 
  value, 
  checked, 
  onCheckChange, 
  isLink = false, 
  onLinkPress,
  hasIcon = false,
  iconComponent
}: TBookingDetailItemProps) => {
  const handlePress = () => {
    if (isLink && onLinkPress) {
      onLinkPress();
    } else if (!isLink) {
      onCheckChange(!checked);
    }
  };

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <View style={styles.labelContainer}>
            {hasIcon && iconComponent && (
              <View style={styles.iconContainer}>
                {iconComponent}
              </View>
            )}
            <Text style={styles.label}>{label}</Text>
          </View>
          {isLink ? (
            <Text style={styles.linkValue}>{value}</Text>
          ) : (
            <Text style={styles.value}>{value}</Text>
          )}
          <View style={styles.separator} />
        </View>
        
        <View style={styles.rightContainer}>
          {isLink ? (
            <View style={styles.shareIcon}>
              <Text style={styles.shareIconText}>⋯</Text>
            </View>
          ) : (
            <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
              {checked && <View style={styles.checkmark} />}
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    marginRight: 16,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  iconContainer: {
    marginRight: 8,
  },
  label: {
    ...theme.textVariants.body14Bold,
    ...theme.textVariants.text,
    fontSize: 14,
    fontWeight: '600',
  },
  separator: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginTop: 8, // Add top margin instead of bottom
  },
  value: {
    ...theme.textVariants.body14,
    ...theme.textVariants.lightText,
    fontSize: 14,
    lineHeight: 20,
  },
  linkValue: {
    ...theme.textVariants.body14,
    color: theme.colors.primary,
    fontSize: 14,
    lineHeight: 20,
  },
  rightContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 24,
    height: 24,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  checkmark: {
    width: 6,
    height: 10,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: theme.colors.white,
    transform: [{ rotate: '45deg' }],
  },
  shareIcon: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareIconText: {
    fontSize: 16,
    color: theme.colors.text,
    fontWeight: 'bold',
    transform: [{ rotate: '90deg' }],
  },
});
