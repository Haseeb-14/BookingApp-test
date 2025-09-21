import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from './text';
import { theme } from '@styles/theme';
import { icons } from '@styles/icons';
import { TBookingDetailItemProps } from '@types';

export const BookingDetailItem = ({ 
  label, 
  value, 
  checked, 
  onCheckChange, 
  isLink = false, 
  onLinkPress,
  hasIcon = false,
  iconComponent,
  isPdf = false
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
              {isPdf ? (
                <icons.ShareIcon width={theme.spacing['20']} height={theme.spacing['20']} />
              ) : (
                <Text style={styles.shareIconText}>⋯</Text>
              )}
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
    marginBottom: theme.spacing['16'],
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    marginRight: theme.spacing['16'],
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing['4'],
  },
  iconContainer: {
    marginRight: theme.spacing['8'],
  },
  label: {
    ...theme.textVariants.body14Bold,
    ...theme.textVariants.text,
  },
  separator: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginTop: theme.spacing['8'],
    marginRight: -theme.spacing['20'], // Extend the line towards the right
  },
  value: {
    ...theme.textVariants.body14,
    ...theme.textVariants.lightText,
  },
  linkValue: {
    ...theme.textVariants.body14,
    color: theme.colors.primary,
  },
  rightContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: theme.spacing['24'],
    height: theme.spacing['24'],
  },
  checkbox: {
    width: theme.spacing['20'],
    height: theme.spacing['20'],
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
    width: theme.spacing['6'],
    height: theme.spacing['10'],
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: theme.colors.white,
    transform: [{ rotate: '45deg' }],
  },
  shareIcon: {
    width: theme.spacing['20'],
    height: theme.spacing['20'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareIconText: {
    fontSize: theme.spacing['16'],
    color: theme.colors.text,
    fontWeight: 'bold',
    transform: [{ rotate: '90deg' }],
  },
});
